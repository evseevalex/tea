import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./modules/main/pages/home/home.component";
import {ProductsComponent} from "./modules/products/pages/products.component";
import {ProductComponent} from "./modules/products/pages/product/product.component";
import {ProductResolver} from "./modules/products/pages/product/product.resolve";
import {OrderComponent} from "./modules/order/pages/order.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./modules/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/products/products.module').then(m => m.ProductsModule)
      }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
