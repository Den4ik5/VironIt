import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";


const routes: Route[] = [
  {path:'test', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

