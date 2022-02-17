import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit
{
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void
  {
  }

}
