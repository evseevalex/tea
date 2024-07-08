import {NgModule, provideZoneChangeDetection} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppRouting} from "./app.routing";
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {provideHttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouting
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
