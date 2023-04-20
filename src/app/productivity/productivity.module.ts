import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductivityComponent } from './productivity.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoFocusDirective } from '../shared/auto-focus/auto-focus.directive';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TopBannerComponent } from '../top-banner/top-banner.component';

const routes: Routes = [
    {
        path: '',
        component: ProductivityComponent
    }
];

@NgModule({
    declarations: [
        ProductivityComponent,
        FilterPipe,
        AutoFocusDirective,
        TopBannerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        DividerModule,
        InputTextModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule,
        RippleModule
    ]
})
export class ProductivityModule {
}
