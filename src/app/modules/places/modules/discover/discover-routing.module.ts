import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';
import { AppUrls } from '../../../../core/constants/app-urls';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage,
  },
  {
    path: `:${AppUrls.PLACE_ID}`,
    loadChildren: () => import('./modules/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {
}
