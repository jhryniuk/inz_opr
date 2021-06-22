import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbDropdownModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {AdminModule} from "./admin/admin.module";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {NiezalogowanyModule} from "./niezalogowany/niezalogowany.module";
import {PacjentModule} from "./pacjent/pacjent.module";
import {LekarzModule} from "./lekarz/lekarz.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbNavModule,
    NgbDropdownModule,
    AdminModule,
    NiezalogowanyModule,
    PacjentModule,
    LekarzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
