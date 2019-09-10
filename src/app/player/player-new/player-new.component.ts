import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {PlayerDetailsService} from '../player-details.service';
import {Player} from '../player';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.scss'],
  providers: [PlayerDetailsService]
})
export class PlayerNewComponent implements OnInit {
  player: Player;

  constructor() {
  }

  ngOnInit() {
  }

  closeDetails() {
    this.player = null;
  }

  add() {
    this.player = {firstname: 'firstname', lastname: 'lastname', college: 'college', position: null, team: 'team'};
  }
}
