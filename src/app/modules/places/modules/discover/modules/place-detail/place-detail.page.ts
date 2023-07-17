import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { Place } from '../../../../../../core/interfaces/place';
import { AppUrls } from '../../../../../../core/constants/app-urls';
import { PlacesService } from '../../../../../../core/services/places.service';
import { CreateBookingModalComponent } from './components/create-booking-modal.component.';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  defaultBackHref = `/${AppUrls.PLACES}/${AppUrls.DISCOVER}`

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.place = this.placesService.getPlaceById(params[AppUrls.PLACE_ID]);
      this.changeDetectorRef.markForCheck();
    });
  }

  async onBookPlace(): Promise<void> {
    const modal = await this.modalController.create({
      component: CreateBookingModalComponent,
      componentProps: {
        selectedPlace: this.place
      }
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data)
    }
  }
}
