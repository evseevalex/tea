import {Injectable} from '@angular/core';
import {Product} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://testologia.ru/tea");
  }

  getProduct(id: string | null): Observable<Product> {
    return this.http.get<Product>(`https://testologia.ru/tea?id=${id}`);
  }

  makeOrder(data: {
              zip: string | null | undefined;
              country: string | null | undefined;
              product: string | null | undefined;
              address: string | null | undefined;
              phone: string | null | undefined;
              name: string | null | undefined;
              last_name: string | null | undefined;
              comment: string | null | undefined
            }
  ): Observable<{ success: number; message?: string }> {
    return this.http.post<{success: number, message?: string}>("https://testologia.ru/order-tea", data)
  }
}
