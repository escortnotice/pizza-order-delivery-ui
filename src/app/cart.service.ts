import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  //url: string = 'http://localhost:8080/orders';
  orderEndpoint = '/orders';
  url = environment.api_base_url + this.orderEndpoint;
  order: Order;
  orderid : string ;

  constructor(private http: HttpClient, private router: Router) { }

  addToCart(product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  createOrder(order:any) {
    this.order = order;
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    console.log("CartService - url:" + this.url);
    console.log("CartService - order:" + JSON.stringify(order));
    console.log("CartService - headers:" + JSON.stringify(options.headers));
    let obs = this.http.post(this.url,JSON.stringify(order),options);
    this.clearCart() ;
    obs.subscribe((response) =>
     {
      console.log('CartService - Got the response: ' + JSON.stringify(response));
      this.orderid =JSON.parse(JSON.stringify(response)).orderid;
       alert('Your Order is Placed Successfully with Order ID - '
                 + JSON.parse(JSON.stringify(response)).orderid);
      this.router.navigate(['order-summary']);

     });
  }

  getCartItemCount(){
    return this.items.length;
  }

  getOrderSummary(){
    console.log("Order Summary: " + JSON.stringify(this.order));
    return this.order;
  }

  getOrderId(){
    return this.orderid;
  }

}
