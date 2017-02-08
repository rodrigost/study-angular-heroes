import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/hero/hero.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroDetailGuard } from './heroes/hero-detail/hero-detail-guard.services';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'hero/:id',
                canActivate: [HeroDetailGuard],
                component: HeroDetailComponent
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
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}