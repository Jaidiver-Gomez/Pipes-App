import { Component } from '@angular/core';
import * as faker from 'faker';
import { interval } from 'rxjs';

const { name } = faker;

interface Client {
  name: string;
  gender: string;
  prefix: string;
}

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: []
})
export class NotCommonsComponent {
  client: Client | undefined;

  // i18nSelect
  invitationMap = { 'Mrs.': 'Invite him.', 'Miss.': 'Invite her.', other: 'Invite them.' };

  // i18nPrural
  clients: string[] = [];
  clientsMap = {
    '=0': `we don't have any clients waiting.`,
    '=1': 'we have 1 client waiting',
    other: 'we have # clients waiting'
  };
  //  Async Pipe
  timer = interval(1000); // 1,2,3
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise data has been chargeed!');
    }, 3500);
  });

  onChangeName() {
    const { findName, gender, prefix } = name;
    this.client = {
      name: findName(),
      gender: gender(),
      prefix: prefix()
    };
    this.clients.push(findName());
  }

  // KeyValue Pipe
  onDeleteClient() {
    this.clients.pop();
  }
}
