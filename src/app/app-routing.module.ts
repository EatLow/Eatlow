import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';
import { IsNotLoggedInGuard } from './shared/guards/is-not-logged-in.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/accueil/accueil.module").then((m) => m.AccueilModule),
  },
  {
    path: "inscription",
    canActivate: [IsNotLoggedInGuard],
    loadChildren: () =>
      import("./pages/register/register.module").then((m) => m.RegisterModule),
  },
  {
    path: "connexion",
    canActivate: [IsNotLoggedInGuard],
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "plat",
    loadChildren: () =>
      import("./pages/plat/plat.module").then((m) => m.PlatModule),
  },
  {
    path: "aliment",
    loadChildren: () =>
      import("./pages/page-ingredient/page-ingredient.module").then(
        (m) => m.PageIngredientModule
      ),
  },
  {
    path: "recherche/ingredients",
    loadChildren: () =>
      import("./pages/searchIngredients/search-ingredients.module").then(
        (m) => m.SearchIngredientsModule
      ),
  },
  {
		path: 'historique',
		canActivate: [IsLoggedInGuard],
		loadChildren: () =>
			import('./pages/history/history.module')
				.then(m => m.HistoryModule)
	},
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
