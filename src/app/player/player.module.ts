import { NgModule } from '@angular/core';
import { PlayerListComponent } from './player-list/player-list.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [PlayerListComponent, PlayerDetailComponent],
  imports: [
    SharedModule
  ],
  exports: [PlayerListComponent, PlayerDetailComponent]
})
export class PlayerModule { }
