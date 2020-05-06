import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrderListModule } from './features/order-list/order-list.module'
import { OrderCreateModule } from './features/order-create/order-create.module'
import { OrderEditModule } from './features/order-edit/order-edit.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderEditModule, 
    OrderCreateModule, 
    OrderListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
