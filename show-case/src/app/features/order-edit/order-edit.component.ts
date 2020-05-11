import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/domain/entities/order';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  private order:Order = new Order();
  private indexParam:number;
  constructor(private _routeActivated: ActivatedRoute,  private _router:Router,) { }

  ngOnInit() {
    this._routeActivated.params
    .subscribe(params => {
      this.indexParam = params.id;
      let orders:Order[] = this.GetOrders();
      this.order = orders[params.id];
    });
  }

  EditOrder(){
    let orders:Order[] = this.GetOrders()
    orders[this.indexParam] = this.order;
    localStorage.setItem('orders',JSON.stringify(orders));
    alert('Order has been updated')
    this._router.navigate(['empresa-listar']);
  }

  GetOrders() {
    return JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : new Array();
  }

}
