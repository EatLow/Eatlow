import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() callBackEvent = new EventEmitter();
  @ViewChild("input") input!:ElementRef ;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.callBackEvent.emit(this.input.nativeElement.value);
  }




}
