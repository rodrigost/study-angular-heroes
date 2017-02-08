import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Hero } from './../shared/hero';

@Injectable()
export class HeroService {
    private _heroServiceUrl = './api/heroes/heroes.json';

    constructor(private _http: Http) { }

    getHeroes(): Observable<Hero[]> {
        var heroes = this._http.get(this._heroServiceUrl)
            .map((response: Response) => <Hero[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
        return heroes;
    }

    getHeroById(heroId: number): Observable<Hero> {
        var result = this._http.get(this._heroServiceUrl)
            .map((response: Response) => {
                var data = <Hero[]>response.json();
                var hero = data.find(hero => hero.id == heroId);
                return hero;
            })
            .do(data => console.log('ByID: ' + JSON.stringify(data)))
            .catch(this.handleError);
        return result;
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
