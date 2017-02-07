import { Component, Input } from '@angular/core';
import { Hero } from './../shared/hero';

@Component({ 
  selector: 'my-hero-detail',
  templateUrl: './app/heroes/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
