import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderCreateRoutingModule } from './order-create-routing.module';
import { OrderCreateComponent } from './order-create.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderCreateRoutingModule,
    OrderCreateComponent
  ]
})
export class OrderCreateModule { }
