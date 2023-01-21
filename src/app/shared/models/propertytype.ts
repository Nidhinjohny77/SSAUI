export class PropertyType{
    uid:number=-1;
    name:string="";

    constructor(data?:any){
        if(data){
            if(data.uid){
                this.uid=data.uid;
            }
            if(data.name){
                this.name=data.name;
            }
        }
    }
}