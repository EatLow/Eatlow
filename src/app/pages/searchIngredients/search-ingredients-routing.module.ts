import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchIngredientsComponent } from "./search-ingredients.component";

const routes: Routes = [{ path: "", component: SearchIngredientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class SearchRoutingModule {}
