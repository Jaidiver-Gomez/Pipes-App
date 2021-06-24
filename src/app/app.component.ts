import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'pipes-app';
  name: string = 'Jaidiver Gómez';
  value: number = 123456;
  obj = {
    name: 'Jaidiver'
  };

  constructor(private primeConfig: PrimeNGConfig) {}

  onChangeName() {
    this.obj.name = faker.name.findName();
  }

  ngOnInit() {
    this.primeConfig.ripple = true;
  }
}
