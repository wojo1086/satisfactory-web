import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Items, items } from '../../assets/data/items';
import { BehaviorSubject, combineLatest, debounceTime, map, Observable, of, startWith, Subscription } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { UserService } from '../shared/services/user/user.service';
import { Auth, user, User } from '@angular/fire/auth';
import { StorageService } from '../shared/services/storage/storage.service';

interface CurrentlyEditing {
    parentKey: string;
    recipeKey: string;
}

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.sass']
})
export class ProductivityComponent implements AfterViewInit, OnInit, OnDestroy {
    @ViewChild('productivityGroupRate', {static: false}) productivityGroupRate!: ElementRef;
    private currentlyEditing: CurrentlyEditing = {} as CurrentlyEditing;
    private firestore: Firestore = inject(Firestore);
    private auth: Auth = inject(Auth);
    user$ = user(this.auth);
    userSubscription!: Subscription;
    search$ = new BehaviorSubject('');
    items: Items | any = items;
    items$ = combineLatest([this.search$.pipe(debounceTime(300), startWith('')), of(items)]).pipe(
        map((res: [string | null, Items]) => {
            const search = res[0] || '';
            const items = res[1];
            return Object.keys(items).filter(key => {
                const recipeNames = Object.keys(items[key as keyof typeof items].recipes).map(recipeKey => items[key as keyof typeof items].recipes[recipeKey].name.toLowerCase());
                return items[key as keyof typeof items].name.toLowerCase().includes(search.toLowerCase()) || recipeNames.filter(recipeName => recipeName.includes(search.toLowerCase())).length
            }).reduce((obj, key) => {
                return {
                    ...obj,
                    [key]: items[key as keyof typeof items]
                };
            }, {});
        })
    );
    filterHandPicked = {handPicked: true};
    productivityGroup!: FormGroup;

    constructor(private renderer: Renderer2,
                private authService: AuthService,
                private userService: UserService,
                private storageService: StorageService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initProductionForm();
        this.userSubscription = this.user$.subscribe((user: User | null) => {
            if (user) {
                this.getProductionData();
            } else {
                this.productivityGroup.patchValue(JSON.parse(this.storageService.getLocal('productionRates')));
            }
        });
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    ngAfterViewInit() {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (e.target !== this.productivityGroupRate?.nativeElement && this.currentlyEditing) {
                this.save();
            }
        });
    }

    searched(val: any): void {
        this.search$.next(val);
    }

    save(): void {
        if (!this.currentlyEditing.recipeKey) {
            return;
        }
        const {parentKey, recipeKey} = this.currentlyEditing;
        const fg = this.productivityGroup.get(parentKey as string)?.get('recipes')?.get(recipeKey as string);
        fg?.patchValue({editing: false});
        this.resetTotal(parentKey);
        this.updateRecipeOutput(parentKey, recipeKey);
        this.updateTotalAndRemaining(parentKey);
        this.currentlyEditing = {} as CurrentlyEditing;
        // this.updateTotalsAndRemaining(this.productivityGroup.controls);
        this.saveToStorage();
    }

    toggleInlineInput(parentKey: string, recipeKey: string): void {
        const fg = this.productivityGroup.get(parentKey)?.get('recipes')?.get(recipeKey);
        setTimeout(() => {
            fg?.patchValue({editing: true});
            this.currentlyEditing = {
                parentKey,
                recipeKey
            };
        }, 100);
    }

    resetAllRecipes(): void {
        for (const itemControl in this.productivityGroup.controls) {
            this.productivityGroup.get(itemControl)?.patchValue({total: 0, remaining: 0});
            for (const recipeControl in this.productivityGroup.get(itemControl)?.get('recipes')?.value) {
                this.productivityGroup.get(itemControl)?.get('recipes')?.get(recipeControl)?.patchValue({rate: 0});
            }
        }
        this.saveToStorage();
    }

    private saveToStorage(): void {
        const saveData = {...this.productivityGroup.value};
        for (const parentRecipe in saveData) {
            const recipes = saveData[parentRecipe].recipes;
            for (const recipe in recipes) {
                delete recipes[recipe].editing;
            }
        }
        if (this.authService.isLoggedIn) {
            const userDataDoc = doc(this.firestore, `production/${this.userService.user.uid}`)
            setDoc(userDataDoc, saveData).then(() => {
                console.log('Saved!')
            });
        } else {
            this.storageService.setLocal('productionRates', JSON.stringify(saveData));
        }
    }

    private updateTotalAndRemaining(parentKey: string): void {
        let total = 0;
        for (const recipe in this.productivityGroup.get(parentKey)?.value.recipes) {
            const recipeRate = this.productivityGroup.get(parentKey)?.value.recipes[recipe].rate;
            total += recipeRate;
        }
        const remaining = this.productivityGroup.get(parentKey)?.get('remaining')?.value;
        this.productivityGroup.get(parentKey)?.patchValue({total: total, remaining: total - Math.abs(remaining)});
        this.updateDependentTotal(total, parentKey, this.currentlyEditing.recipeKey);
    }

    private updateRecipeOutput(parentKey: string, recipeKey: string): void {
        console.log(this.items[parentKey].recipes[recipeKey].outputs)
        Object.keys(this.items[parentKey].recipes[recipeKey].outputs).filter(key => key !== parentKey).forEach(key => {
            const {amount: parentAmount} = this.items[parentKey].recipes[recipeKey].outputs[parentKey];
            const {amount: childAmount} = this.items[parentKey].recipes[recipeKey].outputs[key];
            const parentRate = this.productivityGroup.get(parentKey)?.value.recipes[recipeKey].rate;
            const recipeTotal = this.productivityGroup.get(key)?.get('total')?.value;
            this.productivityGroup.get(key)?.get('total')?.patchValue(recipeTotal + ((childAmount / parentAmount) * parentRate));
        });
    }

    private updateDependentTotal(total: number, parentKey: string, recipeKey: string): void {
        // console.log(this.items[parentKey])
        if (this.items[parentKey].isRaw) {
            return;
        }
        for (const input in this.items[parentKey].recipes[recipeKey].inputs) {
            // console.log(input, total)
            const {amount: inputAmount} = this.items[parentKey].recipes[recipeKey].inputs[input];
            const {amount: outputAmount} = this.items[parentKey].recipes[recipeKey].outputs[parentKey];
            const newTotal = (total * inputAmount) / outputAmount;
            const parentTotal = this.productivityGroup.get(input)?.get('total')?.value;
            const currentRemaining = this.productivityGroup.get(input)?.get('remaining')?.value;
            this.productivityGroup.get(input)?.patchValue({remaining: parentTotal - newTotal - Math.abs(currentRemaining)})
            this.updateDependentTotal(newTotal, input, this.items[input].default);
        }
    }

    private updateTotalsAndRemaining(controls: {[key: string]: AbstractControl<any>}): void {
        for (const controlKey in controls) {
            console.log(this.items[controlKey])
            const recipes = controls[controlKey]?.get('recipes') as FormGroup;
            if (Object.keys(recipes?.controls).length > 0) {
                for (const recipeControl in recipes?.controls) {
                    let subTotal = this.productivityGroup.get(controlKey)?.value.total;
                    const recipeRate = recipes?.get(recipeControl)?.value.rate;
                    this.productivityGroup.get(controlKey)?.patchValue({total: subTotal + recipeRate});
                }
            }
        }
    }

    private resetTotal(key: string): void {
        this.productivityGroup.get(key)?.patchValue({total: 0});
    }

    private resetAllTotals(): void {
        for (const itemControl in this.productivityGroup.controls) {
            this.resetTotal(itemControl);
        }
    }

    private initProductionForm(): void {
        this.productivityGroup = this.fb.group({});
        for (const item in this.items) {
            this.productivityGroup.addControl(item, this.fb.group({
                total: this.fb.control(0),
                remaining: this.fb.control(0),
                recipes: this.fb.group({})
            }));
            Object.keys(this.items[item as keyof typeof items].recipes).forEach(key => {
                (this.productivityGroup.get(item)?.get('recipes') as FormGroup)?.addControl(key, this.fb.group({
                    rate: this.fb.control(0),
                    editing: this.fb.control(false)
                }));
            });
        }
    }

    private getProductionData(): void {
        const userData = doc(this.firestore, `production/${this.userService.user.uid}`)
        docData(userData).subscribe((data: any) => {
            this.productivityGroup.patchValue(data);
        });
    }
}
