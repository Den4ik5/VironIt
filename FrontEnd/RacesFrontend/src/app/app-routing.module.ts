import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"user", loadChildren: './user/user.module#UserModule'},
  {path:"race", loadChildren: './race/race.module#RaceModule'},
  {path:"stage", loadChildren: './stage/stage.module#StageModule'},
  {path:"league", loadChildren: './league/league.module#LeagueModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
