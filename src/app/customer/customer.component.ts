import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { Customer } from '../models/customer.model';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{

  customers!: Customer[];
  //customers$!: Observable<Customer[]>; // méthode 2: en utilisant le pipe async
  errorMessage!: string;
  searchTerm!: string;  // Variable liée à ngModel

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    })

  }

  searchCustomers() {
    return this.customerService.searchCustomers(this.searchTerm).subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }

  deleteCustomer(cust: Customer) {
    //console.log(cust);
    this.customerService.deleteCustomer(cust).subscribe({
      next: () => {
        alert(cust.name+ " has been delete successfuly!");
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        document.location.reload();
      }
    });
  }

  

}
