import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductivityComponent } from './productivity.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ProductivityComponent
    }
];

@NgModule({
    declarations: [
        ProductivityComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        DividerModule,
        InputTextModule,
        ReactiveFormsModule
    ]
})
export class ProductivityModule {
}
