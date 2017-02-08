import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { Hero } from '../shared/hero';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  errorMessage: string;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(hero => this.heroes = hero.slice(1, 5),
                 error => this.errorMessage = <any>error)
  }
}