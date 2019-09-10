import {Injectable} from '@angular/core';
import {Player} from './player';
import {Position} from './position';
import {Observable, Observer} from 'rxjs';

@Injectable()
export class PlayerService {
  players: Player[] = [
    {
      id: 0,
      college: 'Stanford',
      firstname: 'Christian',
      lastname: 'McCaffrey',
      position: Position.RB,
      team: 'Carolina Panthers'
    },
    {
      id: 1,
      college: 'Clemson',
      firstname: 'DeAndre ',
      lastname: 'Hopkins',
      position: Position.WR,
      team: 'Houston Texans'
    },
    {
      id: 2,
      college: 'Texas Tech',
      firstname: 'Patrick',
      lastname: 'Mahomes',
      position: Position.QB,
      team: 'Kansas City Chiefs'
    },
  ];

  constructor() {
  }

  getPlayers(): Observable<Player[]> {
    return new Observable<Player[]>((observer: Observer<Player[]>) => {
      observer.next(this.players);
      observer.complete();
    });
  }

  savePlayer(player: Player): Observable<Player> {
    return new Observable<Player>((observer: Observer<Player>) => {
      const plr = this.players.find(p => p.id === player.id);
      if (plr) {
        player = Object.assign(plr, player);
      } else {
        player.id = this.players.map(plr => plr.id).reduce((m, x) => m > x ? m : x) + 1;
        this.players.push(player);
      }
      observer.next(player);
      observer.complete();
    });
  }
}
