export class Role{
    constructor(roleData?:any){
        if(roleData){
            if(roleData.uid){
                this.uid=roleData.uid;
            }
            if(roleData.name){
                this.name=roleData.name;
            }
        }

    }
    uid:number=0;
    name:string="";
}