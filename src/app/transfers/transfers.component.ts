import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import { Account } from '../models/account.model';
import { OperationService } from '../services/operation/operation.service';
import { Credit, Debit } from '../models/operation.model';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.css'
})
export class TransfersComponent implements OnInit {

  currentAccounts!: Account[]; // stocke les comptes pour permettre de choisir le compte

  transactionForm = {
    accountSource: '',
    accountDestination: '',
    operationType: '',
    amount: '',
    description: ''
  };

  constructor(private operationService: OperationService, private accountService: AccountService) {}


  ngOnInit(): void {
    this.accountService.getAccounts().subscribe({
      next: (data) => {
        //console.log(data);
        // Filtrer pour ne récupérer que les comptes de type 'CurrentAccount'
      this.currentAccounts = data.filter(account => account.type === 'CurrentAccount');
      },
      error: (err) => {console.log(err)}
    });
  }

  transaction() {
    console.log(this.transactionForm);

    // Préparer uniquement les données nécessaires pour un débit et crédit
    let data = {
      accountId: this.transactionForm.accountSource,
      amount: Number(this.transactionForm.amount),
      description: this.transactionForm.description
    };

    if (this.transactionForm.operationType === 'DEBIT') {
      this.operationService.debit(data).subscribe({
        next: () => {
          console.log('Debit success')
          document.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else if(this.transactionForm.operationType === 'CREDIT') {
      this.operationService.credit(data).subscribe({
        next: () => {
          console.log('Credit success')
          document.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      let dataT = {
        accountIdSource: this.transactionForm.accountSource,
        accountIdDestination: this.transactionForm.accountDestination,
        amount: Number(this.transactionForm.amount),
        description: this.transactionForm.description
      };

      console.log(dataT);

      this.operationService.transfer(dataT).subscribe({
        next: () => {
          console.log('Transfer success')
          document.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

}
