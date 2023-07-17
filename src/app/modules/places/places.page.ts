import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacesPage {
  constructor() {
  }
}
