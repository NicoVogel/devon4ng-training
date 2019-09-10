import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerDetailsService } from './player-details.service';
import { Player } from '../player';
import { Position } from '../position';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
})
export class PlayerDetailComponent implements OnInit {
  keys = Object.keys;  message = '';
  @Output() close = new EventEmitter<void>();


  @Input()
  set player(player: Player) {
    this.playerDetailService.player = player;
  }

  get player(): Player {
    return this.playerDetailService.player;
  }
  constructor(private playerDetailService: PlayerDetailsService) { }

  ngOnInit() {
  }

  get positions() {
    return Position;
  }

  onCancelled()  {
    this.flashMessage('Canceled');
    this.playerDetailService.restorePlayer();
  };

  onClose()  { this.close.emit(); };

  onSaved() {
    this.flashMessage('Saved');
    this.playerDetailService.savePlayer();
  }

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }
}
