import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Date and Text',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'Not Commons',
            icon: 'pi pi-globe',
            routerLink: 'not-commons'
          }
        ]
      },
      {
        label: 'Customs Pipes',
        icon: 'pi pi-cog',
        routerLink: 'ordering'
      }
    ];
  }
}
