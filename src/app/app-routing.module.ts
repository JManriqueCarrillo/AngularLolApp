import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'champions',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'champions',
    children: [
      {
        path: "",
        loadChildren: () => import('./champions/champions.module').then(m => m.ChampionsPageModule)
      },
      {
        path: ":championId",
        loadChildren: () => import('./champions/detail/detail.module').then( m => m.DetailPageModule)
      }
    ]
  }    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
