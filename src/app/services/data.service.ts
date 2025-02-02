import { Superheros } from './../common/superheros';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  getSuperHeroes(): Observable<Superheros>{
    return this.http.get<Superheros>('/assets/data/data.json');
  }

  getSupeHeroe():Observable<Superheros>{
    return this.http.get<Superheros>('/assets/data/data.json');
  }
}

