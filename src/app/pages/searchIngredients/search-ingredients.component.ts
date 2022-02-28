import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-ingredients',
  templateUrl: './search-ingredients.component.html',
  styleUrls: ['./search-ingredients.component.scss']
})
export class SearchIngredientsComponent implements OnInit {

  filterTerm!: string;

  public searchForm: FormGroup = new FormGroup({
    search: new FormControl('', Validators.required),
  })
  constructor() { }

  ngOnInit(): void
  {
  }
  onSubmit(): void
  {

  }
}
