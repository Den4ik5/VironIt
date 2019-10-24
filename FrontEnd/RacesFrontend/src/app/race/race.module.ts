import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceComponent } from './race.component';
import {RaceRoutingModule} from "./race-routing.module";



@NgModule({
  declarations: [RaceComponent],
  imports: [
    CommonModule,
    RaceRoutingModule
  ]
})
export class RaceModule { }
