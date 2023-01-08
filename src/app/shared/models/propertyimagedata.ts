export class PropertyImageData{

    constructor(data?:any){
        if(data){
            if(data.uid){
                this.uid=data.uid;
            }
            if(data.propertyUID){
                this.propertyUID=data.propertyUID;
            }
            if(data.imageTypeUID){
                this.imageTypeUID=data.imageTypeUID;
            }
            if(data.fileTypeUID){
                this.fileTypeUID=data.fileTypeUID;
            }
            if(data.fileName){
                this.fileName=data.fileName;
            }
            if(data.isActive!=undefined){
                this.isActive=data.isActive;
            }
        }
    }

    uid?:string;
    propertyUID?:string;
    imageTypeUID?:number;
    fileTypeUID?:number;
    fileName?:string;
    isActive?:boolean;
}