import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@app/prime-ng.module';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderingComponent } from './pages/ordering/ordering.component';

const components = [NumbersComponent, NotCommonsComponent, BasicsComponent, OrderingComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, PrimeNgModule],
  exports: [...components]
})
export class SalesModule {}
