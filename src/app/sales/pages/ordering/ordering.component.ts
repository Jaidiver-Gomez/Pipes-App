import { Component } from '@angular/core';
import { Color, Hero } from '@sales/interfaces/heroes.interface';
import { SortType } from '@sales/pipes/sort.pipe';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styles: []
})
export class OrderingComponent {
  upperCase: boolean = false;
  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green
    }
  ];
  sortBy: SortType;

  onUpperCase() {
    this.upperCase = !this.upperCase;
  }

  onSort(value: SortType) {
    this.sortBy = value;
  }
}
