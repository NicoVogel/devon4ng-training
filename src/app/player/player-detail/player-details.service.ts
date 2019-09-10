import { Injectable } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService {
  private currentPlayer: Player;
  private originalPlayer: Player;

  constructor(private playerService: PlayerService) { }

  set player(plr: Player) {
    this.originalPlayer = plr;
    this.currentPlayer = Object.assign({}, this.originalPlayer);
  }

  get player(): Player {
    return this.currentPlayer;
  }

  restorePlayer() {
    this.player = this.originalPlayer;
  }

  savePlayer() {
    this.player = this.currentPlayer;
    this.playerService.savePlayer(this.currentPlayer).subscribe();
  }
}
