import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import {StageRoutingModule} from "./stage-routing.module";



@NgModule({
  declarations: [StageComponent],
  imports: [
    CommonModule,
    StageRoutingModule
  ]
})
export class StageModule { }
