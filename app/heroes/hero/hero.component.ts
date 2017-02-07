import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './../shared/hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    filter: string;
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes
            });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

