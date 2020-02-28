import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Order} from '../order';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items ;
  name: string;
  email:  string;
  address: string;
  itemid = [];
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  finalizeOrder(){
   var itemids = this.items.map(({ id }) => id);
   console.log("item ids: " + itemids);
   var user = new User(this.name, this.email, this.address);
   console.log("user: " + JSON.stringify(user));
   var order = new Order(itemids,user);
   console.log(JSON.stringify(order));
   this.cartService.createOrder(order);
  }

}
