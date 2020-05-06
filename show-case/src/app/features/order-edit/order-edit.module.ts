import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderEditRoutingModule } from './order-edit-routing.module';
import { OrderEditComponent } from './order-edit.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderEditRoutingModule,
    OrderEditComponent
  ]
})
export class OrderEditModule { }
