import { Team } from './team';
import { Position } from './position';

export interface Player {
    id?: number;
    firstname: string;
    lastname: string;
    team: Team;
    position: Position;
    college: string;
}