import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private api: ApiService) { }

  getCharacters(): Observable<any> {
    return this.api.get<any>(`character`);
  }

  getMainCharacters(): Observable<any> {
    return this.api.get<any>(`character/1,2,3`);
  }
}
