import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrderComponent} from "./pages/order.component";

export const routes: Routes = [
  { path: '', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRouting { }
