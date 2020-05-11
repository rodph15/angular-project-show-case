import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/domain/entities/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  private order:Order = new Order();

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  SaveOrder(){
    let orders:Order[] = JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : new Array();
    orders.push(this.order);
    localStorage.setItem('orders',JSON.stringify(orders));
    alert('Order has been completed')
    this._router.navigate(['empresa-listar']);
  }

}
