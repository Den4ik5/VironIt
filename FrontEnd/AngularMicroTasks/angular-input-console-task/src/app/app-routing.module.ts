import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InputComponent} from "./input/input.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'demo', component: InputComponent},
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
