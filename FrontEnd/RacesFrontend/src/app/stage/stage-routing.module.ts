import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {StageComponent} from "./stage.component";

const routes : Route[] = [
  {path:'test', component:StageComponent}
];


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class StageRoutingModule {}
