import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';
import { AppUrls } from '../../core/constants/app-urls';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppUrls.DISCOVER,
    pathMatch: 'full'
  },
  {
    path: '',
    component: PlacesPage,
    children: [
      {
        path: AppUrls.DISCOVER,
        loadChildren: () => import('./modules/discover/discover.module').then(m => m.DiscoverPageModule)
      },
      {
        path: AppUrls.OFFERS,
        loadChildren: () => import('./modules/offers/offers.module').then( m => m.OffersPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
