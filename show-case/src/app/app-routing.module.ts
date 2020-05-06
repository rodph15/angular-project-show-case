import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './features/order-list/order-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/order-list', pathMatch: 'full' }, 
  { path: '**', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
