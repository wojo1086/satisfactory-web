import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'productivity',
        loadChildren: () => import('./productivity/productivity.module').then((m) => m.ProductivityModule)
    },
    {
        path: '**',
        redirectTo: 'productivity',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
