import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'pipes-app';
  name: string = 'Jaidiver Gómez';
  value: number = 123456;
  obj = {
    name: 'Jaidiver'
  };

  onChangeName() {
    this.obj.name = faker.name.findName();
  }
}
