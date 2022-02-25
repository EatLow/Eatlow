import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accueil-logging-buttons',
  templateUrl: './logging-buttons.component.html',
  styleUrls: ['./logging-buttons.component.scss']
})
export class LoggingButtonsComponent implements OnInit
{
  @Input("disabled")
  public disabled: boolean = true;

  constructor() { }

  ngOnInit(): void
  {

  }

}
