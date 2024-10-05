import { Injectable } from '@angular/core';
import { AccountOperation, Credit, Debit, Transfer } from '../../models/operation.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  backendHost: string = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  public getAccountOperation(accountId: string): Observable<AccountOperation[]> {
    return this.http.get<AccountOperation[]>(`${this.backendHost}/accounts/${accountId}/operations`);
  }

  public getAccountInfo(accountId: string): Observable<Account> {
    return this.http.get<Account>(`${this.backendHost}/accounts/${accountId}`);
  }

  public credit(credit: Credit): Observable<any> {
    return this.http.post<any>(`${this.backendHost}/accounts/credit`, credit);
  }

  public debit(debit: Debit): Observable<any> {
    return this.http.post<any>(`${this.backendHost}/accounts/debit`, debit);
  }

  public transfer(transfer: Transfer): Observable<any> {
    console.log("Transferring: ", transfer);
    return this.http.post(`${this.backendHost}/accounts/transfer`, transfer);
  }
}
