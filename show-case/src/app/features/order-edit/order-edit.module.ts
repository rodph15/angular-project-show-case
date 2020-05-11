import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderEditRoutingModule } from './order-edit-routing.module';
import { OrderEditComponent } from './order-edit.component'


@NgModule({
  declarations: [OrderEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrderEditRoutingModule,
  ]
})
export class OrderEditModule { }
