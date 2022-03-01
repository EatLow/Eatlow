import { Component, OnInit } from '@angular/core';

import { IConsumable } from '../../shared/models/consumable/IConsumable';
import { EnergyCost } from '../../shared/models/energyCost/energy-cost';
import { Ingredient } from '../../shared/models/ingredient/ingredient';
import { SubGroup } from '../../shared/models/subGroup/sub-group';
import { ConsumptionService } from '../../shared/services/consumption.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit
{

    public consumables: IConsumable[] = [
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
        new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5))
    ];
    public isLoading: boolean = true;

    constructor(private _consumptionService: ConsumptionService) { }

    ngOnInit(): void
    {
        this._consumptionService.consumptions$.subscribe((consumables: IConsumable[]) =>
        {
            // this.consumables = consumables;
            this.isLoading = false;
        })
    }

}
