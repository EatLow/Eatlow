import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() callBackEvent = new EventEmitter();

  formSearch: FormGroup = new FormGroup({
    search: new FormControl('', Validators.required)
  })

  constructor() { }

  onSubmit() {
    if(this.formSearch.valid){
      this.callBackEvent.emit(this.formSearch.value['search']);
    }
  }
}
