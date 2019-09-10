import { Injectable } from '@angular/core';
import { Player } from './player';
import { Position } from './position';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
players: Player[] = [
  {  id: 0, college: 'Stanford', firstname: 'Christian', lastname: 'McCaffrey', position: Position.RB, team: {name: 'Carolina Panthers'}  },
  {  id: 1, college: 'Clemson', firstname: 'DeAndre ', lastname: 'Hopkins', position: Position.WR, team: {name: 'Houston Texans'}  },
  {  id: 2, college: 'Texas Tech', firstname: 'Patrick', lastname: 'Mahomes', position: Position.QB, team: {name: 'Kansas City Chiefs'}  },  
];
  constructor() { }

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
        this.players.push(player);
      }
      observer.next(player);
      observer.complete();
    });
  }
}
