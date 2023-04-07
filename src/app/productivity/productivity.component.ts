import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Items, items } from '../../assets/data/items';
import { combineLatest, debounceTime, map, of, startWith } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

interface CurrentlyEditing {
    parentKey: string;
    recipeKey: string;
}

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.sass']
})
export class ProductivityComponent implements AfterViewInit, OnInit {
    @ViewChild('productivityGroupRate', {static: false}) productivityGroupRate!: ElementRef;
    private currentlyEditing: CurrentlyEditing = {} as CurrentlyEditing;
    search = this.fb.control('');
    items: Items | any = items;
    items$ = combineLatest([this.search.valueChanges.pipe(debounceTime(300), startWith('')), of(items)]).pipe(
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

    constructor(private renderer: Renderer2, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initProductionForm();
    }

    ngAfterViewInit() {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (e.target !== this.productivityGroupRate?.nativeElement && this.currentlyEditing) {
                this.save();
            }
        });
    }

    save(): void {
        if (!this.currentlyEditing.recipeKey) {
            return;
        }
        const {parentKey, recipeKey} = this.currentlyEditing;
        const fg = this.productivityGroup.get(parentKey as string)?.get('recipes')?.get(recipeKey as string);
        fg?.patchValue({editing: false});
        this.currentlyEditing = {} as CurrentlyEditing;
        this.resetTotal(parentKey);
        this.updateTotalAndRemaining(parentKey);
        // this.updateTotalsAndRemaining(this.productivityGroup.controls);
        // this.saveToStorage();
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

    private updateTotalAndRemaining(parentKey: string): void {
        for (const recipe in this.productivityGroup.get(parentKey)?.value.recipes) {
            console.log(recipe)
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
        this.productivityGroup.get(key)?.patchValue({total: 0, remaining: 0});
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
}
