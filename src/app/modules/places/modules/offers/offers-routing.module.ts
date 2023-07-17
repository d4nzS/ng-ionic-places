import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OffersPage } from './offers.page';
import { AppUrls } from '../../../../core/constants/app-urls';

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: AppUrls.NEW_OFFER,
    loadChildren: () => import('./modules/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
  },
  {
    path: `:${AppUrls.OFFER_ID}`,
    loadChildren: () => import('./modules/offer-bookings/offer-bookings.module').then(m => m.OfferBookingsPageModule)
  },
  {
    path: `${AppUrls.EDIT_OFFER}/:${AppUrls.OFFER_ID}`,
    loadChildren: () => import('./modules/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {
}
