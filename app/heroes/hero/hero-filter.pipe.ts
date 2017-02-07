import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './../shared/hero';

@Pipe({
    name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {
    transform(value: Hero[], filterBy: string): Hero[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        let result = filterBy ? value.filter((hero: Hero) =>
            hero.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

        return result;
    }
}