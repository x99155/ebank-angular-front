import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../../models/account.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  backendHost: string = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.backendHost}/accounts`);
  }
}
