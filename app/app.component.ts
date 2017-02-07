import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <article>
     <router-outlet></router-outlet>
   </article>
 `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
