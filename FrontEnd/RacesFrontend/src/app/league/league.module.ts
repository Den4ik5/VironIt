import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './league.component';
import {LeagueRoutingModule} from "./league-routing.module";



@NgModule({
  declarations: [LeagueComponent],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ]
})
export class LeagueModule { }
