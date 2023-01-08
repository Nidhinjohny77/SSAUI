export class Token{

    constructor(tokenData?:any){
        if(tokenData){
            if(tokenData.accessToken){
                this.accessToken=tokenData.accessToken;
            }
            if(tokenData.refreshToken){
                this.refreshToken=tokenData.refreshToken;
            }
        }
    }

    accessToken:string="";
    refreshToken:string="";
}