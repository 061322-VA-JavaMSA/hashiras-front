export class Users {
    public id: number;
    public username: string;
    public fname: string;
    public lname: string;
    public email: string;
    public password: string;
    public status: number;

    constructor(id: number, username: string, fname: string, lname: string, email: string, password: string, status: number) {
        this.id = id;
        this.username = username;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.status = status;
    }
}
