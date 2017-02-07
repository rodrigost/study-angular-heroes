import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeroService } from './heroes/hero/hero.service';
import { HeroesComponent } from './heroes/hero/hero.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroFilterPipe } from './heroes/hero/hero-filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RankingComponent } from './heroes/shared/ranking.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ])
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
    HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
