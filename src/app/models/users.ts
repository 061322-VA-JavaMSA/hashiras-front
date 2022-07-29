export class Users {
    public id: number;
    public username: string;
    public password: string;
    public fname: string;
    public lname: string;
    public email: string;
    public status: number;

    constructor(id: number, username: string, password: string, fname: string, lname: string, email: string, status: number) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.status = status;
    }
}
