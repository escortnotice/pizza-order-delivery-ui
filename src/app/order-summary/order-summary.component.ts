import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  order: Order;
  orderid : String;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.order = this.cartService.getOrderSummary();
    this.orderid = this.cartService.getOrderId();
  }


}
