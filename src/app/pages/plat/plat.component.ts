import { Component, Input, OnInit } from '@angular/core';
import { EnergyCost } from 'src/app/shared/models/energyCost/energy-cost';
import { Meal } from 'src/app/shared/models/meal/meal';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {

  // @Input() plat!: Meal; //TODO récup l'id via url param et call le service Meal
  // energyCost = this.plat.energyCost;

  // plat: Meal = JSON.parse(`{ "id": 2077, "name": "Apéritif à base de vin ou vermouth", "subGroupMeal": { "id": 117, "nom": "boisson alcoolisées", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 25, "nom": "boissons", "sousGroupe": [] } }, "ingredients": [{ "id": 2537, "name": "Sucre blanc", "dqr": 2.99, "subGroup": { "id": 173, "nom": "sucres, miels et assimilés", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 35, "nom": "produits sucrés", "sousGroupe": [] } }, "energyCost": { "id": 5152, "agriculture": 0.09501, "transformation": 0.01588, "packaging": 0.01951, "transport": 0.01048, "supermarket": 0.0, "consomation": 0.00482 } }, { "id": 1333, "name": "Eau de vie", "dqr": 3.3, "subGroup": { "id": 117, "nom": "boisson alcoolisées", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 25, "nom": "boissons", "sousGroupe": [] } }, "energyCost": { "id": 3948, "agriculture": 0.0, "transformation": 0.05078, "packaging": 0.05165, "transport": 0.01375, "supermarket": 0.0, "consomation": 0.00435 } }, { "id": 1380, "name": "Vin blanc 11°", "dqr": 3.01, "subGroup": { "id": 117, "nom": "boisson alcoolisées", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 25, "nom": "boissons", "sousGroupe": [] } }, "energyCost": { "id": 3995, "agriculture": 0.087, "transformation": 0.0122, "packaging": 0.05165, "transport": 0.02348, "supermarket": 0.00243, "consomation": 0.00883 } }], "otherStepCost": 0.0700646 }`)

  obj: Meal = JSON.parse(`{ "id": 2077, "name": "Apéritif à base de vin ou vermouth", "subGroupMeal": { "id": 117, "nom": "boisson alcoolisées", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 25, "nom": "boissons", "sousGroupe": [] } }, "ingredients": [{ "id": 2537, "name": "Sucre blanc", "dqr": 2.99, "subGroup": { "id": 173, "nom": "sucres, miels et assimilés", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 35, "nom": "produits sucrés", "sousGroupe": [] } }, "energyCost": { "id": 5152, "agriculture": 0.09501, "transformation": 0.01588, "packaging": 0.01951, "transport": 0.01048, "supermarket": 0.0, "consomation": 0.00482 } }, { "id": 1333, "name": "Eau de vie", "dqr": 3.3, "subGroup": { "id": 117, "nom": "boisson alcoolisées", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 25, "nom": "boissons", "sousGroupe": [] } }, "energyCost": { "id": 3948, "agriculture": 0.0, "transformation": 0.05078, "packaging": 0.05165, "transport": 0.01375, "supermarket": 0.0, "consomation": 0.00435 } }, { "id": 1380, "name": "Vin blanc 11°", "dqr": 3.01, "subGroup": { "id": 117, "nom": "boisson alcoolisées", "ingredients": [], "ssGrpPlat": null, "groupe": { "id": 25, "nom": "boissons", "sousGroupe": [] } }, "energyCost": { "id": 3995, "agriculture": 0.087, "transformation": 0.0122, "packaging": 0.05165, "transport": 0.02348, "supermarket": 0.00243, "consomation": 0.00883 } }], "otherStepCost": 0.0700646 }`);

  plat = new Meal(this.obj.id, this.obj.name, this.obj.subGroupMeal, this.obj.ingredients, this.obj.otherStepCost);

  energyCost = this.plat.energyCost;
  isdetails = false;

  constructor() {
    // this.energyCost.otherStepCost = this.plat.otherStepCost;
    console.log(this.plat.ingredients);

  }

  ngOnInit(): void {
    console.log(this.energyCost);

  }
}
