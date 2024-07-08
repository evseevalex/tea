import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../../types/product.type";

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(private service: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    return this.service.getProduct(route.paramMap.get('id'));
  }
}
