export class User {
    username: string;
    email: string;
    password: string;
    address: string;
    constructor( username: string, email: string, password: string, address: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
    }
}