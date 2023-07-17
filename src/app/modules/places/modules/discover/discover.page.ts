import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { Place } from '../../../../core/interfaces/place';
import { PlacesService } from '../../../../core/services/places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverPage implements OnInit {
  places: Place[];

  constructor(private menuController: MenuController,
              private placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.places = this.placesService.getPlaces();
  }
}
