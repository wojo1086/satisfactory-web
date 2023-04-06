import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Items, items } from '../../assets/data/items';
import { combineLatest, debounceTime, map, of, startWith } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.sass']
})
export class ProductivityComponent implements AfterViewInit, OnInit {
    @ViewChild('productivityGroupRate', {static: false}) productivityGroupRate!: ElementRef;
    private currentlyEditing!: AbstractControl | undefined;
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
        this.currentlyEditing?.patchValue({editing: false});
        this.currentlyEditing = undefined;
        console.log('saved');
        // this.updateTotalsAndRemaining();
        // this.saveToStorage();
    }

    toggleInlineInput(fg: AbstractControl): void {
        fg?.patchValue({editing: true});
        setTimeout(() => this.currentlyEditing = fg, 100);
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
