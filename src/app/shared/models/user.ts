import { Role } from "./role";

export class User {
    uid:string="";
    firstname:string="";
    lastname:string="";
    email:string="";
    isactive:boolean=true;
    username: string="";
    password: string="";
    role:Role|undefined;
}