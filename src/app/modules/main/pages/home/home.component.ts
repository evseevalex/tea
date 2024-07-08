import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";

import {Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy{
  private modalService: NgbModal = inject(NgbModal)

  private TIMEOUT: number = 10000;

  @ViewChild('content') modalRef: ElementRef | undefined;
  private modal: NgbModalRef | undefined;

  private readonly observer: Observable<any>
  private subscription: Subscription | undefined;
  constructor( public router: Router) {
    this.observer = new Observable<any>(
      (observer) => {
        const timer = setTimeout(() => {
          observer.next();
        }, this.TIMEOUT)

        return {
          unsubscribe: () => {
            clearTimeout(timer);
          }
        }
      }
    );
  }

  ngAfterViewInit(): void {
    this.subscription = this.observer.subscribe(() => {
      if(this.modalRef)
        this.modal = this.modalService.open(this.modalRef, { centered: true })
    })
  }

  async seaCatalog() {
    this.modal?.close()

    await this.router.navigateByUrl('products')
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
