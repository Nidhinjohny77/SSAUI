import { Role } from "./role";

export class User {    
    constructor(data?:any){
        if(data){
            if(data.uid){
                this.uid=data.uid;
            }
            if(data.email){
                this.email=data.email;
            }
            if(data.firstName){
                this.firstName=data.firstName;
            }
            if(data.lastName){
                this.lastName=data.lastName;
            }
            if(data.isActive){
                this.isActive=data.isActive;
            }
            if(data.role){
                this.role=new Role(data.role);
            }
        }
    }

    uid:string="";
    firstName:string="";
    lastName:string="";
    email:string="";
    isActive:boolean=true;
    role:Role|undefined;
}