export class Message{

    constructor(messageData?:any){
        if(messageData){
            if(messageData.message){
                this.message=messageData.message;
            }
            if(messageData.errorCode){
                this.messageCode=messageData.errorCode;
            }
        }
    }
    messageCode:string="";
    message:string="";
}