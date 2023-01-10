export class Image{

    constructor(data?:any){
        if(data){
            if(data.uid){
                this.uid=data.uid;
            }
            if(data.imageTypeUID){
                this.imageTypeUID=data.imageTypeUID;
            }
            if(data.imageType){
                this.imageType=data.imageType;
            }
            if(data.fileName){
                this.fileName=data.fileName;
            }
            if(data.image){
                this.image=data.image;
            }
        }
    }
    uid?:string;
    imageTypeUID?:number;
    imageType?:string;
    fileName?:string;
    image?:string;
}