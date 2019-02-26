import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'https://cat-app-demo.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor(private http: HttpClient) {
  }

  getAllFacts(): Observable<FactInterface[]> {
    return this.http.get<FactInterface[]>(`${BASE_URL}/facts`);
  }

  getAllBreeds(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/breeds`);
  }

  getRandomFact(breed: string): Observable<FactInterface> {
    return this.http.get<FactInterface>(`${BASE_URL}/facts/${breed}`);
  }
}

export interface FactInterface {
  fact: string;
  header: string;
}

