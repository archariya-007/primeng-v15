import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FavCityComponent } from './fav-city/fav-city.component';
import { DropdownModule } from "primeng/dropdown";
import { PanelModule } from "primeng/panel";

import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    FavCityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    PanelModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly injector: Injector) {
  }

  ngDoBootstrap(): void {
    const el = createCustomElement(AppComponent, { injector: this.injector })
    customElements.define('app-mfe-notif', el)
  }
}
