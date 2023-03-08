import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { IndependentComponent } from './independent/independent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndependentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
