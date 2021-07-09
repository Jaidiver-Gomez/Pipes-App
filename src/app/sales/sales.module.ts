import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@app/prime-ng.module';
import { UppercasePipe } from '@sales/pipes/uppercase.pipe';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderingComponent } from './pages/ordering/ordering.component';
import { FlyingPipe } from './pipes/flying.pipe';
import { SortPipe } from './pipes/sort.pipe';

const components = [NumbersComponent, NotCommonsComponent, BasicsComponent, OrderingComponent, UppercasePipe];

@NgModule({
  declarations: [...components, FlyingPipe, SortPipe],
  imports: [CommonModule, PrimeNgModule],
  exports: [...components]
})
export class SalesModule {}
