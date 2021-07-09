import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '@sales/interfaces/heroes.interface';

export type SortType = 'name' | 'fly' | 'color' | undefined;

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[], orderBy: SortType): Hero[] {
    if (orderBy) {
      heroes = heroes.sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1));
    }
    return heroes;
  }
}
