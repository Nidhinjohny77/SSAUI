export class PropertyFilter{
    location:string|null="";
    startRent:number|null=null;
    endRent:number|null=null;
    bedroomCount:number|null=null;
    bathRoomCount:number|null=null;
    propertyTypeUID:number|null=null;
    furnishTypeUID:number|null=null;

    constructor(data?:any){
        if(data){
            if(data.location){
                this.location=data.location;
            }
            if(data.startRent){
                this.startRent=data.startRent;
            }
            if(data.endRent){
                this.endRent=data.endRent;
            }
            if(data.bedroomCount){
                this.bedroomCount=data.bedroomCount;
            }
            if(data.bathRoomCount){
                this.bathRoomCount=data.bathRoomCount;
            }
            if(data.propertyTypeUID){
                this.propertyTypeUID=data.propertyTypeUID;
            }
            if(data.furnishTypeUID){
                this.furnishTypeUID=data.furnishTypeUID;
            }
        }
        
    }

}