import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.email]],
  })

  constructor(
    private router: Router,
    private fb : FormBuilder
    ) {}

    onSave():void {
      console.log(this.myForm.value);
    }

  irARegister() {
    this.router.navigate(['register']);
  }
}

