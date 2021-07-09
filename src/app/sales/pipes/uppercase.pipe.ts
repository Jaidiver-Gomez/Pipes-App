import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class UppercasePipe implements PipeTransform {
  transform = (value: string, onUppercase: boolean): string =>
    onUppercase ? value.toUpperCase() : value.toLowerCase();
}
