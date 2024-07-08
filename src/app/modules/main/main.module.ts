import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./pages/home/home.component";
import {SharedModule} from "../../shared/shared.module";
import {MainRouting} from "./main.routing";
import {
  NgbAccordionBody, NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem, NgbAccordionModule, NgbModalModule
} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRouting,
    NgbAccordionModule
  ]
})
export class MainModule { }
