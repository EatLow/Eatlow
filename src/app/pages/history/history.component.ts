import { Component, OnInit } from '@angular/core';

import { IConsumable } from '../../shared/models/consumable/IConsumable';
import { ConsumptionService } from '../../shared/services/consumption.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit
{

    public consumables: IConsumable[] = [];
    public isLoading: boolean = true;

    constructor(private _consumptionService: ConsumptionService) { }

    ngOnInit(): void
    {
        this._consumptionService.consumptions$.subscribe((consumables: IConsumable[]) =>
        {
            this.consumables = consumables;
            this.isLoading = false;
        })
    }

}
