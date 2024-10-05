import { Component } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent {

  newCustomers = {
    name: '',
    email: '',
  }

  constructor(private customerService: CustomerService, private router: Router) {}

  addCustomer() {
    //console.log('Customer create successfuly', this.newCustomers);
    this.customerService.addCustomer(this.newCustomers).subscribe({
      next: (data) => {
        alert(data.name+ " has been saved successfuly!");
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.router.navigateByUrl("/customers");
      }
    });
  }

}
