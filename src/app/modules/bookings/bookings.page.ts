import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingsPage {

  constructor() {
  }
}
