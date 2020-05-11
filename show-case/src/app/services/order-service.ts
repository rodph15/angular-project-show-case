import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IOrder } from '../domain/interfaces/iorder';
import { Order } from '../domain/entities/order';
import { environment } from '../../environments/environment';

@Injectable()
export class OrderService {

  private CreateOrderUrl: string = "YourUrlApiOrder";
  private EditOrderUrl: string = "YourUrlApiOrder";
  private GetOrderUrl: string = "YourUrlApiOrder";
  private GetOrderByIdUrl: string = "YourUrlApiOrder";
  private DeleteOrderUrl: string = "YourUrlApiOrder";

  constructor(private http: HttpClient) { }

  DoDeleteOrder(id: number): Observable<any> {
    return this.http.delete<number>(`${environment.url}${this.DeleteOrderUrl}/${id}`);
  }

  DoCreateOrder(order: Order): Observable<IOrder> {
    return this.http.post<IOrder>(environment.url + this.CreateOrderUrl, order);
  }

  DoEditOrder(Order: Order): Observable<IOrder> {
    return this.http.put<IOrder>(environment.url + this.EditOrderUrl, Order);
  }

  /*GetOrders(): Observable<any> {
    return this.http.get(environment.url+this.GetOrderUrl);
  }*/
  GetOrders() {
    return JSON.parse(localStorage.getItem("orders")) ? JSON.parse(localStorage.getItem("orders")) : new Array();
  }
  GetOrderById(id: number): Observable<any> {
    return this.http.get<number>(`${environment.url}${this.GetOrderByIdUrl}/${id}`);
  }

}