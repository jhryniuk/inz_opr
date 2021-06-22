import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {NgbDropdownModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AdminComponent,
    ],
  imports: [
    NgbNavModule,
    NgbDropdownModule,
    CommonModule
  ]
})
export class AdminModule {
}
