import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionsPage } from './champions.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionsPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionsPageRoutingModule {}
