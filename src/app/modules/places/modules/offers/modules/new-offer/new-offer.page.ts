import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppUrls } from '../../../../../../core/constants/app-urls';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOfferPage {
  defaultBackHref = `/${AppUrls.PLACES}/${AppUrls.OFFERS}`;
  constructor() { }
}
