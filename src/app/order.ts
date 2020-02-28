import { User } from './user';

export class Order {

    itemids: number[];
    user : User;

    constructor(itemids:number[],user:User){
        this.itemids = itemids;
        this.user = user;
    }
}