import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IIngredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';

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
  public ingredients : IIngredient[]=[];
  constructor(private ingredientService : IngredientService) { }

  ngOnInit(): void
  {
  }
  onSubmit(): void
  {

  }

  onClick(inputValue : string){
    console.log(inputValue);
    if (inputValue !== "") {
    this.ingredientService.getIngredientsByName(inputValue).subscribe((ingredients:IIngredient[]) => {
      this.ingredients = ingredients;
      });
  }}

}
