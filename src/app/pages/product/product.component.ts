import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  private _product: Product | undefined;
  get product() {
    return this._product;
  }

  constructor(public activeRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit():void {
    this.subscription = this.activeRoute.data.subscribe(
      (data: any): void => this._product = data.product
    )
  }

  toOrder(title: string | undefined) : void {
    if(title)
      this.router.navigate(['/order'], { queryParams: {product: title}})
  }

  ngOnDestroy() : void
  {
    this.subscription?.unsubscribe();
  }
}
