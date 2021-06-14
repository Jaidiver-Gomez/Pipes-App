import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@app/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';

const components = [MenuComponent];
const modules = [PrimeNgModule];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...components, ...modules]
})
export class SharedModule {}
