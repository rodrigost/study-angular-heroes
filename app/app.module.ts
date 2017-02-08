import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HeroService } from './heroes/hero/hero.service';
import { HeroesComponent } from './heroes/hero/hero.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroFilterPipe } from './heroes/hero/hero-filter.pipe';
import { HeroDetailGuard } from './heroes/hero-detail/hero-detail-guard.services';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { RankingComponent } from './heroes/shared/ranking.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroFilterPipe,
    RankingComponent
  ],
  providers: [
    HeroDetailGuard, HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
