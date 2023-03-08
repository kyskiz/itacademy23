import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { IndependentComponent } from './independent/independent.component';
import { HiLoStringPipe } from './pipes/hi-lo-string.pipe';
import { ElementStyleDirective } from './directives/element-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonInfoComponent,
    HiLoStringPipe,
    ElementStyleDirective,
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
