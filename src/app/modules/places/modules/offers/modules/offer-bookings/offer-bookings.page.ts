import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Place } from '../../../../../../core/interfaces/place';
import { AppUrls } from '../../../../../../core/constants/app-urls';
import { PlacesService } from '../../../../../../core/services/places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  defaultBackHref = `/${AppUrls.PLACES}/${AppUrls.OFFERS}`;
  editOfferHref: string;

  constructor(private activatedRoute: ActivatedRoute,
              private placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.place = this.placesService.getPlaceById(params[AppUrls.OFFER_ID]);
      this.editOfferHref = `../${AppUrls.EDIT_OFFER}/${this.place.id}`;
    });
  }
}
