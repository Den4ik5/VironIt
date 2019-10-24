import {RouterModule, Route} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Route[] = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule {
}

