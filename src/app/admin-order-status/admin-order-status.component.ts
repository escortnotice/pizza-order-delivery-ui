import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-order-status',
  templateUrl: './admin-order-status.component.html',
  styleUrls: ['./admin-order-status.component.css']
})
export class AdminOrderStatusComponent implements OnInit {

  
  orderStatus : any = {orderStatus: true};
  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  orderId : any;
  url : string = 'http://localhost:8080/pizza/orderId/status';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  orderAccepted(){
    let url = this.url.replace('orderId',this.orderId);
    console.log("order accepted: " + url);
    let obs = this.http.patch(url+"/orderAccepted",JSON.stringify(this.orderStatus),this.options);
    obs.subscribe((response) => console.log('Got the response: ' + JSON.stringify(response)));
  }

  orderReadyForPickup(){
    let url = this.url.replace('orderId',this.orderId);
    console.log("order readyforpickup: " + url);
    let obs = this.http.patch(url+"/orderReadyforpickup",JSON.stringify(this.orderStatus),this.options);
    obs.subscribe((response) => console.log('Got the response: ' + JSON.stringify(response)));
  }

  orderOutForDevlivery(){
    let url = this.url.replace('orderId',this.orderId);
    console.log("order outfordelivery: " + url);
    let obs = this.http.patch(url+"/orderOutfordelivery",JSON.stringify(this.orderStatus),this.options);
    obs.subscribe((response) => console.log('Got the response: ' + JSON.stringify(response)));
  }

}
