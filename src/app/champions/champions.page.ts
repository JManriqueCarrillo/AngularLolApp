import { Component, OnInit } from '@angular/core';
import { ChampionSummaryComponent } from './champion-summary/champion-summary.component';
import { CHAMPIONS_LIST } from 'src/app/mocks/mock-champion-summary';
import { ChampionSummary } from '../models/champion-summary';
import { ChampionsServiceService } from './champions-service.service';
import { LoadingService } from '../services/loading.service';
import {MatProgressSpinnerModule} from '@angular/material'

@Component({
  selector: 'app-champions',
  templateUrl: './champions.page.html',
  styleUrls: ['./champions.page.scss'],
})
export class ChampionsPage implements OnInit {

  champions: ChampionSummary[] = []

  constructor(private championsService: ChampionsServiceService,
    public loadingService: LoadingService) { }

  ngOnInit() {
    this.showChampionsSummaryList();
  }

  showChampionsSummaryList() {
    this.championsService.getChampionsSummaryList().subscribe(
      (data: ChampionSummary[]) => {
        this.champions = data.filter((it) => {
          return it.id != -1
        }).sort(function (it1, it2) {
          return it1.name.localeCompare(it2.name)
        })
      })
  }
}
