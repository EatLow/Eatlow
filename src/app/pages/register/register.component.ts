import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{

  constructor()
  {
    console.log("test");
  }

  ngOnInit(): void
  {
  }

}
