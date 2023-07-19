import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Booking } from '../../core/interfaces/booking';
import { BookingsService } from '../../core/services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingsPage implements OnInit {
  bookings: Booking[];
  constructor(private bookingsService: BookingsService) {
  }

  ngOnInit(): void {
    this.bookings = this.bookingsService.getBookings();
  }

  onCancelBooking(bookingId: string): void {

  }
}
