import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customers', component: CustomerComponent },
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'accounts', component: AccountComponent },
  { path: 'transfers', component: TransfersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
