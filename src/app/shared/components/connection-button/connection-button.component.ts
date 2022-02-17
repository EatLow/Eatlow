import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection-button',
  templateUrl: './connection-button.component.html',
  styleUrls: ['./connection-button.component.scss']
})
export class ConnectionButtonComponent implements OnInit
{

  @Input("active")
  public active: boolean = false;
  constructor() { }

  ngOnInit(): void
  {
  }

}
