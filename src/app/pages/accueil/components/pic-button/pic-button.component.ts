import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accueil-pic-button',
  templateUrl: './pic-button.component.html',
  styleUrls: ['./pic-button.component.scss']
})
export class PicButtonComponent implements OnInit
{
  @Input()
  public urlPic!: string;

  @Input()
  public title!: string;

  @Input("disabled")
  public disabled: boolean = false;

  constructor() { }

  ngOnInit(): void
  {
  }



}
