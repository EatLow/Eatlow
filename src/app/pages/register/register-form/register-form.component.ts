import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit
{
  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    lastname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
    confirmPassword: new FormControl('', Validators.required),
  })
  constructor() { }

  ngOnInit(): void
  {
  }

  onSubmit(): void
  {
    console.log(this.registerForm.valid);
  }
}
