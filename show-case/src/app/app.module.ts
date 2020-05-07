import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrderListModule } from './features/order-list/order-list.module'
import { OrderCreateModule } from './features/order-create/order-create.module'
import { OrderEditModule } from './features/order-edit/order-edit.module'

import { OrderService } from './services/order-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OrderEditModule, 
    OrderCreateModule, 
    OrderListModule,
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
