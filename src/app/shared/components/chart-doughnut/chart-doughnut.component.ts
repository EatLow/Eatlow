import { Component, Input } from '@angular/core';
import { EnergyCost } from '../../models/energyCost/energy-cost';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss']
})
export class ChartDoughnutComponent{
  energyCost: EnergyCost = {
    "id": 3947,
    "agriculture": 0.0,
    "transformation": 0.05078,
    "packaging": 0.05165,
    "transport": 0.01375,
    "supermarket": 0.00243,
    "consomation": 0.00442
    };

  ecoScore: number = 5;

  // @Input() energyCost: object = {};
  // @Input() ecoScore: number = 5;


  private ecoColore():string {
    let color: string = "";
    if(this.ecoScore > 0 &&  this.ecoScore <= 1) color = "#79eb6f";
    else if (this.ecoScore > 1 &&  this.ecoScore <= 2) color = "#cfea2a";
    else if (this.ecoScore > 2 &&  this.ecoScore <= 3) color = "#fefe32";
    else if (this.ecoScore > 3 &&  this.ecoScore < 4) color = "#fd5307";
    else color = "#fe2712";
    return color;
  }

  private splitedObject():any {
    const names = [];
    const vals = [];
    const colors = [];

  if(this.energyCost["agriculture"]) {
    colors.push('#fcc096');
    names.push("🚜 Agriculture");
    vals.push(this.energyCost["agriculture"]);
  }
  if(this.energyCost["transformation"]) {
    colors.push('#b2ecf7');
    names.push("🥫 Transformation");
    vals.push(this.energyCost["transformation"]);
  }
  if(this.energyCost["packaging"]) {
    colors.push('#cebde1');
    names.push("🧴 Emballage");
    vals.push(this.energyCost["packaging"]);
  }
  if(this.energyCost["transport"]) {
    colors.push('#bbe7d6');
    names.push("🚚 Transport");
    vals.push(this.energyCost["transport"]);
  }
  if(this.energyCost["supermarket"]) {
    colors.push('#fcc096');
    names.push("🏪 Supermarché");
    vals.push(this.energyCost["supermarket"]);
  }
  if(this.energyCost["consomation"]) {
    colors.push('#fcedb6');
    names.push("🍽️ Consommation");
    vals.push(this.energyCost["consomation"]);
  }
    return [names, vals, colors];
  }

  private ecoColors():string {
    let ecoColor = '';
    if(this.ecoScore > 0 &&  this.ecoScore <= 1) ecoColor = "#79eb6f";
    else if (this.ecoScore > 1 &&  this.ecoScore <= 2) ecoColor = "#cfea2a";
    else if (this.ecoScore > 2 &&  this.ecoScore <= 3) ecoColor = "#fefe32";
    else if (this.ecoScore > 3 &&  this.ecoScore < 4) ecoColor = "#fd5307";
    else ecoColor = "#fe2712";
    return ecoColor;
  }

  private doughnut():any {
  }





  

}