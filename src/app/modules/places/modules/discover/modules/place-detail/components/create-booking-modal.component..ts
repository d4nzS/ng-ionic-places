import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { Place } from '../../../../../../../core/interfaces/place';

@Component({
  selector: 'app-create-booking-modal',
  templateUrl: './create-booking-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateBookingModalComponent {
  @Input() selectedPlace: Place;

  constructor(private modalController: ModalController) {
  }

  onCancel(): void {
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace(): void {
    this.modalController.dismiss({ message: 'Test message' }, 'confirm');
  }
}
