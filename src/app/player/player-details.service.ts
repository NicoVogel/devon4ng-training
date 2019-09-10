import {Injectable} from '@angular/core';
import {PlayerService} from './player.service';
import {Player} from './player';

@Injectable()
export class PlayerDetailsService {
  private currentPlayer: Player;
  private originalPlayer: Player;

  constructor(private playerService: PlayerService) {
  }

  get player(): Player {
    return this.currentPlayer;
  }

  set player(plr: Player) {
    this.originalPlayer = plr;
    this.currentPlayer = Object.assign({}, this.originalPlayer);
  }

  restorePlayer() {
    this.player = this.originalPlayer;
  }

  savePlayer() {
    this.player = this.currentPlayer;
    this.playerService.savePlayer(this.currentPlayer).subscribe();
  }
}
