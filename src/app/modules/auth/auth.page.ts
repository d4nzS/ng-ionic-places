import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPage implements OnInit {
  form: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;
  isLoginMode = true;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });

    this.emailControl = this.form.get('email') as FormControl;
    this.passwordControl = this.form.get('password') as FormControl;
  }

  onSwitchAuthMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    if (this.isLoginMode) {

    } else {

    }
  }
}
