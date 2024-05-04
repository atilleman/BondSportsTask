import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetPlayersInfo } from './players.actions';
import { NBAInfo } from '../model/nbaInfo';
import { PlayersApiService } from './players-api.service';

export class PlayersStateModel {
  errorGettingPlayers?: any;
  players: NBAInfo[];
}

@State<PlayersStateModel>({
  name: 'PLAYERSINFO',
  defaults: new PlayersStateModel(),
})

@Injectable()
export class PlayersState {

  constructor(private playerApiService: PlayersApiService) {}

  @Action(GetPlayersInfo)
  public async getPlayers({
    patchState
  }: StateContext<PlayersStateModel>, {params}: GetPlayersInfo) {
    patchState({
      errorGettingPlayers: null,
      players: undefined
    });
    try {
      const response = await this.playerApiService.getPlayers(params);
      if ( !response) {
        patchState({
          errorGettingPlayers: response || true
        });
        return;
      }

      if (params.existingData.length == 0){
        patchState({
          players: [response]
        });
      } else {
        patchState({
          players: [...params.existingData, response]
        });
      }
    } catch (error) {
      let errorMessage = error;
      if ( error) {
        errorMessage = error;
      }
      patchState({
        errorGettingPlayers: errorMessage || true
      });
    }
  }
}
