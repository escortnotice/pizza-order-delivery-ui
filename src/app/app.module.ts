import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { AdminOrderStatusComponent } from './admin-order-status/admin-order-status.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaOrderComponent,
    UserOrderStatusComponent,
    AdminOrderStatusComponent,
    CartComponent,
    TopHeaderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
