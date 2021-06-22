import {NgModule} from "@angular/core";
import {LekarzComponent} from "./lekarz.component";
import {NgbDropdownModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    NgbNavModule,
    CommonModule,
    NgbDropdownModule
  ],
    declarations: [
        LekarzComponent
    ]
})
export class LekarzModule {
}
