import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { TransfersComponent } from './transfers/transfers.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    AccountComponent,
    HomeComponent,
    NewCustomerComponent,
    TransfersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
