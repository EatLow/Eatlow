import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit
{
  public registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })
  public submitted: boolean = false;

  constructor(private _authService: AuthService, private _formBuilder: FormBuilder) 
  {

  }

  ngOnInit(): void
  {
    this.registerForm = this._formBuilder.group({
      'email': ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]
      ],
      'lastname': ['', Validators.required],
      'firstname': ['', Validators.required],
      'password': ['',
        [
          Validators.required,
          Validators.minLength(3)
        ]],
      'confirmPassword': ['', Validators.required]

    }, {
      validators: [this.match('password', 'confirmPassword')]
    });
  }

  onSubmit(): void
  {
    this.submitted = true;
    if (this.registerForm.valid)
    {
      const lastname: string = this.registerForm.get("lastname")!.value;
      const firstname: string = this.registerForm.get("firstname")!.value;
      const email: string = this.registerForm.get("email")!.value;
      const password: string = this.registerForm.get("password")!.value;
      this._authService.register(lastname, firstname, email, password)
    }
  }

  match(controlName: string, checkControlName: string): ValidatorFn
  {
    return (controls: AbstractControl) =>
    {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching'])
      {
        return null;
      }
      if (control?.value !== checkControl?.value)
      {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else
      {
        return null;
      }
    };
  }
  get f(): { [key: string]: AbstractControl }
  {
    return this.registerForm.controls;
  }
}
