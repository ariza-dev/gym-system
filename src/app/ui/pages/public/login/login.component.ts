import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsecase } from '../../../../domain/auth/usecases/login.usecase';
import { FormUtilitiesService } from '../../../design-system/services/formUtilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  protected formUtilities = inject(FormUtilitiesService);

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _loginUsecase: LoginUsecase
  ) { }

  onSave(): void {
    const { email, password } = this.myForm.value;
    this._loginUsecase.login({ email, password }).subscribe({
      next: (res) => console.log(res)
    })
  }

  irARegister() {
    this.router.navigate(['register']);
  }
}
