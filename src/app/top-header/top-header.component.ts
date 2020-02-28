import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  cartItemCount:number;

  constructor(private cartService: CartService ) { }

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

}
