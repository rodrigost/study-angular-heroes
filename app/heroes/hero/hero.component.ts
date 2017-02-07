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
    errorMessage: string;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error
            );
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

