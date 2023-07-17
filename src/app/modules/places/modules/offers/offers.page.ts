import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Place } from '../../../../core/interfaces/place';
import { PlacesService } from '../../../../core/services/places.service';
import { AppUrls } from '../../../../core/constants/app-urls';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersPage implements OnInit {
  offers: Place[];
  newOfferHref = AppUrls.NEW_OFFER;

  constructor(private placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.offers = this.placesService.getPlaces();
  }
}
