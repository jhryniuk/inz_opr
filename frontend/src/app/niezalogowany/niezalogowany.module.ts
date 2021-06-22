import {NgModule} from "@angular/core";
import {NiezalogowanyComponent} from "./niezalogowany.component";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        NgbNavModule
    ],
    declarations: [
        NiezalogowanyComponent
    ]
})
export class NiezalogowanyModule {
}
