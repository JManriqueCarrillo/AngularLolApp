import { Component, Input, OnInit, Output } from '@angular/core';
import { ChampionDetail } from 'src/app/models/champion-detail';
import { ChampionDetailService } from './champion-detail.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  championId: string
  @Input() champion: ChampionDetail
  @Output() toggle = new EventEmitter<Object>();

  constructor(private championDetailService: ChampionDetailService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.championId = paramMap.get('championId');
      this.getDetail(this.championId)
    })
  }

  getDetail(championId: string) {
    this.championDetailService.getChampionDetail(championId).subscribe(
      (data: ChampionDetail) => {
        this.champion = data
        this.toggle.emit(this.champion)
      }
    )
  }

  getAvatarUrl(championID: string) {
    return "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + championID + ".png";
  }

}
