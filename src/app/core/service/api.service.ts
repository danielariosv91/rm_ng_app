import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  get<T>(path: string, options = {}): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, options)
  }
}
