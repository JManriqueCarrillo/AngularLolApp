import { Component, OnInit } from '@angular/core';
import { ChampionSummaryComponent } from './champion-summary/champion-summary.component';
import { CHAMPIONS_LIST } from 'src/app/mocks/mock-champion-summary';
import { ChampionSummary } from '../models/champion-summary';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.page.html',
  styleUrls: ['./champions.page.scss'],
})
export class ChampionsPage implements OnInit {

  champions: ChampionSummary[] = CHAMPIONS_LIST

  constructor() { }

  ngOnInit() {
  }


}
