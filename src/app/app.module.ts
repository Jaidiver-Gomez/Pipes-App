import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localSpCo from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr-CA';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { AppRouterModule } from '@app/app-router.module';
import { SalesModule } from '@sales/sales.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

registerLocaleData(localSpCo);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRouterModule, HttpClientModule, SalesModule, SharedModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'COP' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
