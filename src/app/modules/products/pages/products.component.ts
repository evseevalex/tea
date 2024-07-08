import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../core/services/product.service";
import {Product} from "../../../../types/product.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  private _products: Product[] | undefined;
  get products() {
    return this._products;
  }
  constructor(public productService: ProductService) {

  }

  ngOnInit():void {
    this.subscription = this.productService.getProducts().subscribe(
      (data: any): void => {
        this._products = data
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
