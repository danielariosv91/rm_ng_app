import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, Observable, of } from 'rxjs';

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

  getOneCharacter(id: string): Observable<any> {
    return this.api.get<any>(`character/${id}`).pipe(
      map((item: any) => {
        return {
          ...item,
          episode: item.episode.map((e: any) => {
            const episodeId = e.split('/').pop();
            return {
              url: e,
              ep: parseInt(episodeId, 10)
            };
          })
        };
      })
    );
  }

}
