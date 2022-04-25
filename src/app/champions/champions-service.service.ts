import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { ChampionSummary } from '../models/champion-summary';

@Injectable({
  providedIn: 'root'
})
export class ChampionsServiceService {

  constructor(private http: HttpClient) { }

  getChampionsSummaryList(): Observable<ChampionSummary[]> {
    return this.http.get<ChampionSummary[]>("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json")
  }
}
