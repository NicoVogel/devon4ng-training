import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../player';
import {Position} from '../position';
import {PlayerDetailsService} from '../player-details.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  providers: [PlayerDetailsService]
})
export class PlayerDetailComponent implements OnInit {
  keys = Object.keys;
  message = '';
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  constructor(private playerDetailService: PlayerDetailsService) {
  }

  get player(): Player {
    return this.playerDetailService.player;
  }

  @Input()
  set player(player: Player) {
    this.playerDetailService.player = player;
  }

  get positions() {
    return Position;
  }

  ngOnInit() {
  }

  onCancelled() {
    this.flashMessage('Canceled');
    this.playerDetailService.restorePlayer();
  };

  onClose() {
    this.close.emit();
  };

  onSaved() {
    this.flashMessage('Saved');
    this.playerDetailService.savePlayer();
  }

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }
}
