
import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { Order } from 'src/app/domain/entities/order';
import { OrderService } from 'src/app/services/order-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = new Array();
  
  constructor(private _orderService:OrderService,private _router:Router) { }

  ngOnInit() {
        this.getOrderList();
  }

  getOrderList(){
   /* this._orderService.GetOrders().subscribe(data =>{
      this.orders = data;
   });*/
    this.orders = this._orderService.GetOrders();
  }

  DeleteOrder(index:number){

    let orders:Order[] = JSON.parse(localStorage.getItem('orders'));
    orders.splice(index,1);
    localStorage.setItem('orders',JSON.stringify(orders));
    alert('Order has been deleted')
    this._router.navigate(['empresa-listar']);
  }

}
