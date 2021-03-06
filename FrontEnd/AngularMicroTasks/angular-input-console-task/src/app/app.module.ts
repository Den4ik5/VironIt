import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { EmptyComponent } from './empty/empty.component';
import {FormsModule} from "@angular/forms";
import {ChildInputComponent} from "./child.input/child.input.component";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    EmptyComponent,
    ChildInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmptyComponent]
})
export class AppModule { }
