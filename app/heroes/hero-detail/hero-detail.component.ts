import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Hero } from './../shared/hero';
import { HeroService } from './../hero/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _heroService: HeroService) { }

  ngOnInit(): void {
    let heroId = <number>this._route.snapshot.params["id"];

    this._heroService.getHeroById(heroId)
      .subscribe(
          result => this.hero = result,
          error => this.errorMessage = <any>error
      );
    
    console.log("ngOnInit: " + this.hero);
    console.log("errorMessage: " + this.errorMessage);
  }

   onRankingClicked(message: string): void {
    console.log(message);
  }
}
