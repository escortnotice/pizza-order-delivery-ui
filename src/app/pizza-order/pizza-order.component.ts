import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';
import { CartService } from '../cart.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  name : string ;
  email: string;
  pizzaType: string;
  url: string = 'http://localhost:8080/pizza/order';
  //fetchItemsURL: string = 'http://localhost:8080/items';
  itemsEndpoint:string = '/items';
  fetchItemsURL : string = environment.api_base_url + this.itemsEndpoint;
  //products = products;
  products;

  cartItemCount;
  orderObj = new Order();

  constructor(private http: HttpClient,private cartService: CartService) { }

  ngOnInit() {
    console.log("fetchItemsURL:" + this.fetchItemsURL);
    let obs = this.http.get(this.fetchItemsURL);
    obs.subscribe((response) =>{
      console.log('Items List: ' + JSON.stringify(response));
      this.products = response;
    });
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  getItems(){
    let obs = this.http.get(this.fetchItemsURL);
    obs.subscribe((response) =>{
      //console.log('Items List: ' + JSON.stringify(response));
      this.products = JSON.stringify(response);
      console.log('Items List from response:' + this.products);
    });
  }
  
  // order(){
  //   console.log("Entered Email id : " + this.email + " name: " + this.name + " pizzatype: " + this.pizzaType);
    
  //   this.orderObj.email = this.email;
  //   this.orderObj.pizza_type = this.pizzaType;
  //   this.orderObj.user_name = this.name;
  //   console.log("order: " + JSON.stringify(this.orderObj));

    
  //   let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  //   let obs = this.http.post(this.url,JSON.stringify(this.orderObj),options);
  //   obs.subscribe((response) => {
  //     console.log('Got the response: ' + JSON.stringify(response));
  //     alert('Your Order Is Placed with order id ');
  //   });
  // }

  addToCart(product) {
    window.alert('Your Item has been added to the Cart!');
    this.cartService.addToCart(product);
    this.cartItemCount = this.cartService.getCartItemCount();
  }

}
