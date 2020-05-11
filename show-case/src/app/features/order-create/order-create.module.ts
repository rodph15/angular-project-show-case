import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderCreateRoutingModule } from './order-create-routing.module';
import { OrderCreateComponent } from './order-create.component'

@NgModule({
  declarations: [OrderCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrderCreateRoutingModule
  ]
})
export class OrderCreateModule { }
