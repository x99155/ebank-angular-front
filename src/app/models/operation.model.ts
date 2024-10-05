import { OperationType } from "../enum/type.enum";
import { Account } from "./account.model";

// affichage des opérations
export interface AccountOperation {
    id?: number;
    operationDate?: Date;
    amount?: number;
    description?: string;
    type?: OperationType;
    account?: Account;
}


// opération de transfer
export interface Transfer {
    accountIdSource: string;
    accountIdDestination: string;
    amount: number;
    description: string;
    date?: Date;
}

// opération de débit
export interface Debit {
    accountId: string;
    amount: number;
    description: string;
    date?: Date;
}

// opération de crédit
export interface Credit {
    accountId: string;
    amount: number;
    description: string;
    date?: Date;
}