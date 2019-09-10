import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerListComponent} from "./player-list/player-list.component";
import {PlayerService} from "./player.service";


const routes: Routes = [
  {
    path: '',
    component: PlayerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PlayerService]
})
export class PlayerRoutingModule {
}
