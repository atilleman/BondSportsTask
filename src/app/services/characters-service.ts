import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCharactersUsingGETRequestParams } from './characters.serviceinterface';
import { AllCharacters } from '../model/allCharacters';
import { CharacterInfo } from '../model/characterInfo';
import { AllEpisodes } from '../model/allEpisodes';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  characterPrefix(): string {
    return `character/`;
  }
  episodePrefix(): string {
    return `episode/`;
  }

  constructor(private http: HttpClient) {}

  public getCharacters(requestParameters: GetCharactersUsingGETRequestParams): Observable<AllCharacters> {
    const params = new HttpParams()
    .set('page', requestParameters.page)
  
    return this.http.get<AllCharacters>(`${environment.gw}${this.characterPrefix()}?${params}`).pipe(
      catchError((error: AllCharacters) => of(error))
    )
  }

  public getCharacterDetails(id: number): Observable<CharacterInfo> {
    return this.http.get<CharacterInfo>(`${environment.gw}${this.characterPrefix()}${id}`).pipe(
      catchError((error: CharacterInfo) => of(error))
    )
  }

  public getEpisodes(): Observable<AllEpisodes> {
    return this.http.get<AllEpisodes>(`${environment.gw}${this.episodePrefix()}`).pipe(
      catchError((error: AllEpisodes) => of(error))
    )
  }
}

