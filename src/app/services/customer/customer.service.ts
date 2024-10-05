import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backendHost: string = 'http://localhost:9000';

  constructor(private http: HttpClient, private router: Router) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.backendHost}/customers`);
  }

  public searchCustomers(keyword: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.backendHost}/customers/search?keyword=${keyword}`);
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.backendHost}/customers`, customer);
  }

  public deleteCustomer(customer: Customer): Observable<any> { // dans le backend la méthode delete ne retourne rien
    return this.http.delete(`${this.backendHost}/customers/${customer.id}`);
  }
}
