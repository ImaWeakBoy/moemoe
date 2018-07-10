import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { WordsModule } from './words/words.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavModule,
    OrdersModule,
    CustomersModule,
    WordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
