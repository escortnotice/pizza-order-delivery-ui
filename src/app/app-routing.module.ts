import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { AdminOrderStatusComponent } from './admin-order-status/admin-order-status.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { CartComponent } from './cart/cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


const routes: Routes = [
  { path: '', component: PizzaOrderComponent },
  { path: 'order', component: PizzaOrderComponent },
  { path: 'user-orderstatus', component: UserOrderStatusComponent },
  { path: 'user-orderstatus/:orderid', component: UserOrderStatusComponent },
  { path: 'admin-orderstatus', component: AdminOrderStatusComponent },
  { path: 'cart', component: CartComponent },
  {path: 'order-summary',component:OrderSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
