import { Component, Input, OnInit } from '@angular/core';
import { ChampionSummary } from 'src/app/models/champion-summary';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-champion-summary',
  templateUrl: './champion-summary.component.html',
  styleUrls: ['./champion-summary.component.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class ChampionSummaryComponent implements OnInit {

  @Input() champion: ChampionSummary

  constructor() { }

  ngOnInit() { }

  getAvatarUrl(championID: string) {
    return "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + championID + ".png";
  }
}
