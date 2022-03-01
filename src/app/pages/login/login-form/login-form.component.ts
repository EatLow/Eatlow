import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit
{
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  public isSubmitted: boolean = false;
  public isLoading: boolean = true;

  constructor(private _authService: AuthService, private _formBuilder: FormBuilder)
  {
  }

  ngOnInit(): void
  {
    this.loginForm = this._formBuilder.group(
      {
        email: ['',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ]
        ],
        password: ['', Validators.required]
      }
    )
  }
  onSubmit(): void
  {
    this.isSubmitted = true;
    if (this.loginForm.valid)
    {
      const emailControl: AbstractControl = this.loginForm.get("email")!;
      const passwordControl: AbstractControl = this.loginForm.get("password")!;
      const email: string = emailControl.value;
      const password: string = passwordControl.value;
      this._authService.login(email, password)
        .then((res) =>
        {
          if (!res)
          {
            emailControl.setErrors({ wrongInputs: "wrongInputs" });
            passwordControl.setErrors({ wrongInputs: "wrongInputs" });
          }
        })
        .catch((err) =>
        {
          emailControl.setErrors({ wrongInputs: "wrongInputs" });
          passwordControl.setErrors({ wrongInputs: "wrongInputs" });
        })
    }
  }

  get f(): { [key: string]: AbstractControl }
  {
    return this.loginForm.controls;
  }
}
