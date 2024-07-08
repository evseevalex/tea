import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductsComponent} from "./pages/products.component";
import {ProductComponent} from "./pages/product/product.component";
import {ProductResolver} from "./pages/product/product.resolve";

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductComponent,
    resolve: {
      product: ProductResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRouting { }
