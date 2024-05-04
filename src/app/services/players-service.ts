import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NBAInfo } from '../model/nbaInfo';
import { GetPlayersInfoUsingGETRequestParams } from './players.serviceinterface';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  prefix(): string {
    return `GetPlayers/`;
  }

  constructor(private http: HttpClient) {}

  public getPlayers(requestParameters: GetPlayersInfoUsingGETRequestParams): Observable<NBAInfo> {
    
    const params = new HttpParams()
    .set('cursor', requestParameters.cursor)
    .set('per_page', requestParameters.per_page)
    .set('search', requestParameters.search)
    .set('first_name', requestParameters.first_name)
    .set('last_name', requestParameters.last_name);;

    return this.http.get<NBAInfo>(`${environment.gw}${this.prefix()}?${params}`).pipe(
      catchError((error: NBAInfo) => of(error))
    )
  }
}

