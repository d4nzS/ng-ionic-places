import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MenuController, SegmentCustomEvent } from '@ionic/angular';

import { Place } from '../../../../core/interfaces/place';
import { PlacesService } from '../../../../core/services/places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverPage implements OnInit {
  places: Place[];
  segmentButtons = [
    { value: 'all', title: 'All Places'},
    { value: 'bookable', title: 'Bookable Places'}
  ];

  constructor(private menuController: MenuController,
              private placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.places = this.placesService.getPlaces();
  }

  onFilterUpdate(event: Event): void {
    console.log((event as SegmentCustomEvent).detail);
  }
}
