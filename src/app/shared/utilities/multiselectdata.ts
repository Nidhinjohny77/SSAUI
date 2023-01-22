export class MultiSelectData{
    uid:number=-1;
    controlContextName:string="";
    displayName:string="";
    isEnabled:boolean=false;
  
    constructor(data?:any){
          if(data){
              if(data.uid){
                  this.uid=data.uid;
              }
              if(data.controlContextName){
                this.controlContextName=data.controlContextName;
            }
              if(data.displayName){
                this.displayName=data.displayName;
              }
              if(data.name){
                  this.displayName=data.name;
              }
              if(data.isEnabled!=undefined){
                this.isEnabled=data.isEnabled;
            }
          }
    }
  }