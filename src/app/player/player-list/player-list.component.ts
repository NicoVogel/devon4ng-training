import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Observable } from 'rxjs';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Observable<Player[]>;
  selectedPlayers: Player[] = [];


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  showDetails(plr: Player) {
    if (!this.selectedPlayers.find(player => player.id === plr.id)) {
      this.selectedPlayers.push(plr);
    }
  }

  closeDetails(ix: number) {
    this.selectedPlayers.splice(ix, 1);
  }
}
