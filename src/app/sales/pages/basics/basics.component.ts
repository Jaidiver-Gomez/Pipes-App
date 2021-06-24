import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: []
})
export class BasicsComponent {
  lowerName: string = 'jaidiver';
  upperName: string = 'JAIDIVER';
  fullName: string = 'jaiDiver GóMEz';

  today: Date = new Date();
}
