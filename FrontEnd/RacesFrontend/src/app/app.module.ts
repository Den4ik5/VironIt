import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from "./user/user.module";
import {RaceModule} from "./race/race.module";
import {StageModule} from "./stage/stage.module";
import {LeagueModule} from "./league/league.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RaceModule,
    StageModule,
    LeagueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
