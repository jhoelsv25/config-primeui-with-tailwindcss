import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule,
    RouterLinkWithHref,
    NgClass,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  public showPassword = signal<boolean>(false);
  public loginForm: FormGroup;
  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  public togglePassword() {
    this.showPassword.update((prev) => !prev);
  }

  singIn() {
    if (this.loginForm.valid) {
      console.log('Email: ', this.loginForm.value.email);
      console.log('Password: ', this.loginForm.value.password);
    }
  }
}
