import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {

  //url : string = "http://localhost:8080/userOrders/";
  orderObj : any = {};
  orderId : String;
  userOrderEndpoint = '/userOrders/';
  url = environment.api_base_url + this.userOrderEndpoint;
  
  constructor(private http: HttpClient, private route: ActivatedRoute,) {
    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('orderid');
      console.log("UserOrderStatusComponent.class - orderid: " + this.orderId);
      if(this.orderId !=='' && this.orderId !== null && this.orderId !== undefined){
        console.log("UserOrderStatusComponent.class : fetching order for orderid - " + this.orderId);
        this.fetchOrder();
      }
          
    });
   }
  

  ngOnInit() {
  }

  fetchOrder(){
    this.http.get(this.url + this.orderId).subscribe((data: {}) => {
      this.orderObj = data;
      console.log(JSON.stringify(data));
    })
    
    setInterval(() => {
      this.http.get(this.url + this.orderId).subscribe((data: {}) => {
        this.orderObj = data;
        console.log(JSON.stringify(data));
      })
  }, .2 * 60 * 1000);
  }

}
