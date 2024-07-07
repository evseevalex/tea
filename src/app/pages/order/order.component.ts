import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit, OnDestroy{
  private subscription: Subscription | undefined;

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern( /^[А-Я][а-яё]*$/i)]),
    last_name: new FormControl('', [Validators.required, Validators.pattern( /^[А-Я][а-яё]*$/i)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[+]?\d{11}$/)]),
    country: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    product: new FormControl({value: '', disabled: true}, [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern(/^(?!\s*$)[-\/, 0-9а-яА-Я]+$/)]),
    comment: new FormControl(''),
  });

  public isComplete: boolean = false;
  public isError: boolean = false

  constructor(public route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit(): void {
    const productParams: string | null = this.route.snapshot.queryParamMap.get('product');
    if(productParams) {
      this.orderForm.patchValue({
        product: productParams,
      })
    }
  }


  makeOrder(): void {
    if(this.orderForm.valid) {
      this.subscription = this.productService.makeOrder({
        name: this.orderForm.value.name,
        last_name: this.orderForm.value.last_name,
        phone: this.orderForm.value.phone,
        country: this.orderForm.value.country,
        zip: this.orderForm.value.zip,
        product: this.orderForm.getRawValue().product,
        address: this.orderForm.value.address,
        comment: this.orderForm.value.comment,
      }).subscribe(response => {
        console.log(response)
        if (response.success) {
          this.isComplete = true;
        } else {
          this.isError = true;
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
