import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
