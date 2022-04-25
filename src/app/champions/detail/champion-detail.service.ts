import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChampionDetail } from 'src/app/models/champion-detail';

@Injectable({
  providedIn: 'root'
})
export class ChampionDetailService {

  constructor(private http: HttpClient) { }

  getChampionDetail(championId: string){
    return this.http.get<ChampionDetail>("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/es_es/v1/champions/" + championId + ".json")
  }
}
