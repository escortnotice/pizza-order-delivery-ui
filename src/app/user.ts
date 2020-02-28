export class User {

    username: string;
    email: string;
    address: string;

    constructor(name:string, email:string, address:string) {
        this.username = name;
        this.email = email;
        this.address = address;
    }
}