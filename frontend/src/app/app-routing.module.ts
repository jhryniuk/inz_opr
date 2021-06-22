import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {NiezalogowanyComponent} from "./niezalogowany/niezalogowany.component";
import {PacjentComponent} from "./pacjent/pacjent.component";
import {LekarzComponent} from "./lekarz/lekarz.component";

const routes: Routes = [
  {
    path: '',
    component: NiezalogowanyComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'pacjent',
    component: PacjentComponent
  },
  {
    path: 'lekarz',
    component: LekarzComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
