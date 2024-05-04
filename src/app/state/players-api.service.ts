import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PlayersService } from '../services/players-service';
import { GetPlayersInfoUsingGETRequestParams } from '../services/players.serviceinterface';
import { NBAInfo } from '../model/nbaInfo';


@Injectable()
export class PlayersApiService {

  constructor(private playersService: PlayersService) { }

  async getPlayers(params: GetPlayersInfoUsingGETRequestParams): Promise<NBAInfo> {
    return await firstValueFrom(this.playersService.getPlayers(params));
  }
}
