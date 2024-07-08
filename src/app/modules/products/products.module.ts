import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./pages/products.component";
import {ProductComponent} from "./pages/product/product.component";
import {ProductService} from "../../core/services/product.service";
import {RouterLink} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {provideHttpClient} from "@angular/common/http";
import {ProductsRouting} from "./products.routing";
import {ProductResolver} from "./pages/product/product.resolve";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule,
    ProductsRouting
  ],
  providers: [
    ProductResolver,
    ProductsRouting
  ]
})
export class ProductsModule { }
