import { Component, OnInit } from '@angular/core';
import { AccountOperation } from '../models/operation.model';
import { OperationService } from '../services/operation/operation.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent{

  searchTerm!: string;
  operations!: AccountOperation[]; // stock les donnée relatifs au opérations du compte
  overview!: Account; // stock les données relatifs au compte (solde, date de création, etc)

  constructor(private operationService: OperationService) {}


  searchAccounts() {
    console.log(this.searchTerm);
    return this.operationService.getAccountOperation(this.searchTerm).subscribe({
      next: (data) => {
        this.operations = data;
        this.getAccount(); // Appel de la fonction getAccount après la récupération des opérations
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getAccount() {
    return this.operationService.getAccountInfo(this.searchTerm).subscribe({
      next: (data) => {
        console.log(data);
        this.overview = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
