import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

import {Router, RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  private TIMEOUT: number = 10000;

  private readonly observer: Observable<any>
  private subscription: Subscription | undefined;
  constructor( public router: Router) {
    this.observer = new Observable<any>(
      (observer) => {
        const timer = setTimeout(() => {
          observer.next($('#popup'));
        }, this.TIMEOUT)

        return {
          unsubscribe: () => {
            clearTimeout(timer);
          }
        }
      }
    );
  }

  ngOnInit(): void {
    $('#accordion').accordion({
      collapsible: true,
      icons: null,
    })

    this.subscription = this.observer.subscribe((element) => {
      element.modal("show")
    })
  }

  async seaCatalog() {
    $('#popup').modal('hide');
    $('#myModal').on('hidden.bs.modal', function (e : Event) {
      $('#popup').modal('dispose');
    })

    await this.router.navigateByUrl('products')
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
