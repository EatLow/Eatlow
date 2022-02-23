import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-ingredient',
  templateUrl: './page-ingredient.component.html',
  styleUrls: ['./page-ingredient.component.scss']
})
export class PageIngredientComponent implements OnInit {
  score:number = 0.23;
  dqr:string = "0.14";

  constructor() { }
  setColor() :string {
    let color: string = '';
    if (this.score > 0 && this.score <= 1) color = "green";
    else if (this.score > 1 && this.score <= 2) color = "softgreen";
    else if (this.score > 2 && this.score <= 3) color = "yellow";
    else if (this.score > 3 && this.score < 4) color = "orange";
    else color = "red";
    return color;
  }
  ngOnInit(): void {
  }

}

// TODO récupérer l'ingrédient selon l'id récupérer
// TODO récupérer passer le dqr
// TODO Passer l'EnergyCost de l'ingrédient
