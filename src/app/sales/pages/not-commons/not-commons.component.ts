import { Component } from '@angular/core';
import * as faker from 'faker';

const { name } = faker;

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: []
})
export class NotCommonsComponent {
  client = {
    name: '',
    gender: '',
    prefix: ''
  };
  // i18nSelect
  invitationMap = { 'Mrs.': 'Invite him.', 'Miss.': 'Invite her.', other: 'Invite them.' };

  // i18nPrural
  clients: string[] = [];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando'
  };

  onChangeName() {
    const { findName, gender, prefix, suffix } = name;

    this.client = {
      name: findName(),
      gender: gender(),
      prefix: prefix()
    };
    console.log(this.client.prefix, this.client.name, this.client.gender, suffix());
  }
}
