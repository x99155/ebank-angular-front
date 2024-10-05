import { AccountStatus } from "../enum/status.enum";
import { Customer } from "./customer.model";

export interface Account {
    id?: string;
    balance?: number;
    status?: AccountStatus;
    createdAt?: Date;
    type?: string;
    customerDto?: Customer;
}

// export interface AccountResponse {
//     id?: string;
//     balance?: number;
//     status?: AccountStatus;
//     createdAt?: Date;
//     customer: Customer;
// }
