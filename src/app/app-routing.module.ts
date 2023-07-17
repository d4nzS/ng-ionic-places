import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppUrls } from './core/constants/app-urls';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: AppUrls.PLACES, pathMatch: 'full' },
  {
    path: AppUrls.PLACES,
    canMatch: [authGuard],
    loadChildren: () => import('./modules/places/places.module').then(m => m.PlacesPageModule),
  },
  {
    path: AppUrls.BOOKINGS,
    canMatch: [authGuard],
    loadChildren: () => import('./modules/bookings/bookings.module').then(m => m.BookingsPageModule),
  },
  { path: AppUrls.AUTH, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
