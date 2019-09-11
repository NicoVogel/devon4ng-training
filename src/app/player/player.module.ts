import {NgModule} from '@angular/core';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayerNewComponent} from './player-new/player-new.component';
import {PlayerRoutingModule} from "./player-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [PlayerListComponent, PlayerDetailComponent, PlayerNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerRoutingModule
  ],
  exports: [PlayerListComponent, PlayerDetailComponent, PlayerNewComponent],
})
export class PlayerModule {
}
