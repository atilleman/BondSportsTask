import { Injectable } from '@angular/core';
import { StateHelperService } from '../services/state-helper.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetPlayersInfoUsingGETRequestParams } from '../services/players.serviceinterface';
import { GetPlayersInfo } from './players.actions';
import { PlayersSelectors } from './players.selectors';
import { NBAInfo } from '../model/nbaInfo';

@Injectable()
export class PlayersStateService {

  @Select(PlayersSelectors.getPlayers) players$: Observable<NBAInfo[]>;
  constructor(private stateHelperService: StateHelperService) {}

  async getPlayers(params: GetPlayersInfoUsingGETRequestParams) {
    return await this.stateHelperService.runTypedAction<NBAInfo>(new GetPlayersInfo(params),
                                                                 PlayersSelectors.getErrorGettingPlayerInfo);
  }

  getPlayersFromState(): NBAInfo[] {
    return this.stateHelperService.getSnapshot(PlayersSelectors.getPlayers);
  }

  resetPlayersState() {
    return this.stateHelperService.resetObject(PlayersSelectors.getPlayers);
  }
}
