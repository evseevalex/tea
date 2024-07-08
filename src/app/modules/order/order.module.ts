import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./pages/order.component";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderRouting} from "./order.routing";



@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRouting
  ]
})
export class OrderModule { }
