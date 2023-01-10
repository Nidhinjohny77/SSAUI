export class City{
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
    public uid:number=-1;
    public name:string="";

}