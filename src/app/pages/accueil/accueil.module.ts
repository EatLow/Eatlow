import { SharedComponentsModule } from './../../shared/components/shared-components.module';
import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { TitleComponent } from './components/title/title.component';
import { PicButtonComponent } from './components/pic-button/pic-button.component';
import { LoggingButtonsComponent } from './components/logging-buttons/logging-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AccueilComponent,
    TitleComponent,
    PicButtonComponent,
    LoggingButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccueilRoutingModule,
    SharedComponentsModule
  ]
})
export class AccueilModule { }
