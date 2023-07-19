import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Place } from '../../../../../../core/interfaces/place';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferItemComponent {
  @Input() offer: Place;

  testDate = new Date();

  constructor() {
  }
}
