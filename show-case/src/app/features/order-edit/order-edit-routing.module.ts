import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OrderEditComponent } from './order-edit.component'

const routes: Routes = [{ path: 'order-edit/:id', component: OrderEditComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderEditRoutingModule { }
