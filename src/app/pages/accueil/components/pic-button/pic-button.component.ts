import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accueil-pic-button',
  templateUrl: './pic-button.component.html',
  styleUrls: ['./pic-button.component.scss']
})
export class PicButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public urlPic! : string;

}
