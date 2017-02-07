import { Component, OnInit } from '@angular/core';
import { HeroService } from '../heroes/hero.service';
import { Hero } from '../heroes/hero';

@Component({ 
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(hero => {
      this.heroes = hero.slice(1, 5);
    })
  }
}