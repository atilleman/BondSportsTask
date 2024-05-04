import { Selector } from '@ngxs/store';
import { PlayersState, PlayersStateModel } from './players.state';

export class PlayersSelectors {

  @Selector([PlayersState])
  static getErrorGettingPlayerInfo(state: PlayersStateModel) {
    return state.errorGettingPlayers;
  }

  @Selector([PlayersState])
  static getPlayers(state: PlayersStateModel) {
    return state.players;
  }

}
