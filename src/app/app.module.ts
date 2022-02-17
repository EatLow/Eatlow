import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionButtonComponent } from './shared/components/connection-button/connection-button.component';
import { SubTitleComponent } from './shared/components/sub-title/sub-title.component';
import { TitleComponent } from './shared/components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SubTitleComponent,
    ConnectionButtonComponent
  ],
  exports: [
    TitleComponent,
    SubTitleComponent,
    ConnectionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }