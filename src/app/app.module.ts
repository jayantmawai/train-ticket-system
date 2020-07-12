import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookingTicketModule } from './booking-ticket/booking-ticket.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { ENV_IMPORTS } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , 
    HttpClientModule,
    BookingTicketModule,       
    // ...ENV_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
