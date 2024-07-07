import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

import {ProductComponent} from "./pages/product/product.component";
import {OrderComponent} from "./pages/order/order.component";
import {ProductResolver} from "./pages/product/product.resolve";
import {ProductsComponent} from "./pages/products/products.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolver
    }
  },
  { path: 'order', component: OrderComponent },
];
