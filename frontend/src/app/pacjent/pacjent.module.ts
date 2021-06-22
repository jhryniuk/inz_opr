import {NgModule} from "@angular/core";
import {PacjentComponent} from "./pacjent.component";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    NgbNavModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    PacjentComponent
  ]
})
export class PacjentModule {
}
