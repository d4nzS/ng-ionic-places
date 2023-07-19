import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppUrls } from '../../../../../../core/constants/app-urls';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOfferPage implements OnInit {
  MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

  form: FormGroup;
  minDateFrom = new Date().toISOString();
  minDateTo = new Date(Date.now() + this.MILLISECONDS_IN_DAY).toISOString();
  defaultBackHref = `/${AppUrls.PLACES}/${AppUrls.OFFERS}`;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'description': ['', [
        Validators.required,
        Validators.maxLength(180)
      ]],
      'price': ['', [
        Validators.required,
        Validators.min(1)
      ]],
      'dateFrom': [this.minDateFrom, [Validators.required]],
      'dateTo': [this.minDateTo, [Validators.required]]
    });

    this.form.get('dateFrom').valueChanges.subscribe(
        value => this.form.get('dateTo')
          .setValue(new Date(+new Date(value) + this.MILLISECONDS_IN_DAY).toISOString())
      );
  }

  onCreateOffer(): void {
    console.log(this.form.value)
  }
}
