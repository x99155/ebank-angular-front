import { Account } from "./account.model";

export interface Customer {
    id?: number;
    name: string;
    email: string;
    //account?: Account;
}

// J'ai le choix de mettre le point d'intérogation pour dire que c'est une donné non obligatoire
// soir je crée un dto responsable de ce qui sera envoyé au backend
// export interface CustomerDto {
//     name: string;
//     email: string;
// }
//export type TaskForm = Pick<Task, 'title' | 'description'>;