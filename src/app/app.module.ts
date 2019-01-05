import { BrowserModule } from '@angular/platform-browser';
import { NgModule,InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { KingComponent } from './king/king.component';
import { FormsModule} from '@angular/forms';
import { HeroDetialComponent } from './hero-detial/hero-detial.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    KingComponent,
    HeroDetialComponent,
    CopyrightComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
