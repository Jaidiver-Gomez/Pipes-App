import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from '@sales/pages/basics/basics.component';
import { NumbersComponent } from '@sales/pages/numbers/numbers.component';
import { NotCommonsComponent } from '@sales/pages/not-commons/not-commons.component';
import { OrderingComponent } from '@sales/pages/ordering/ordering.component';

const route: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent
  },
  {
    path: 'ordering',
    component: OrderingComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRouterModule {}
