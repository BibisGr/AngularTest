import { Rickymorty } from './../common/rickymorty';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RyMLocations } from '../common/ry-mlocations';
import { RyMEpisode } from '../common/ry-mEpisode';
import { RyMPersonaje } from '../common/ry-mpersonaje';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api/character/'

  private urlApiBase = 'https://rickandmortyapi.com/api/'

  constructor(private http: HttpClient) { }

  public GetData(): Observable<Rickymorty> {
    return this.http.get<Rickymorty>(this.urlApi)
  }
  public GetDataPersonaje(id: number): Observable<RyMPersonaje> {
    return this.http.get<RyMPersonaje>(this.urlApi + id)
  }
  public getCharacterPage(page: string): Observable<Rickymorty>{
    return this.http.get<Rickymorty>(page)

  }
}
