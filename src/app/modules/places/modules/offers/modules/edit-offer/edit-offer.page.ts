import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Place } from '../../../../../../core/interfaces/place';
import { PlacesService } from '../../../../../../core/services/places.service';
import { AppUrls } from '../../../../../../core/constants/app-urls';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditOfferPage implements OnInit {
  place: Place;
  defaultBackHref: string;

  constructor(private activatedRoute: ActivatedRoute,
              private placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.place = this.placesService.getPlaceById(params[AppUrls.OFFER_ID]);
      this.defaultBackHref = `/${AppUrls.PLACES}/${AppUrls.OFFERS}/${this.place.id}`;
    });
  }
}
