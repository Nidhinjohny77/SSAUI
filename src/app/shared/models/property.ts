import { Image } from "./image";
import { PropertyImageData } from "./propertyimagedata";

export class Property{  
  constructor(data?:any){
    if(data){
        if(data.propertyUID){
            this.propertyUID=data.propertyUID;
        }
        if(data.propertyListingUID){
            this.propertyListingUID=data.propertyListingUID;
        }
        if(data.title){
            this.title=data.title;
        }
        if(data.description){
            this.description=data.description;
        }
        if(data.location){
          this.location=data.location;
        }
        if(data.landmark){
          this.landmark=data.landmark;
        }

        if(data.isNew!=undefined){
          this.isNew=data.isNew;
        }
        if(data.isStudentFriendly!=undefined){
          this.isStudentFriendly=data.isStudentFriendly;
        }
        if(data.isPetsAllowed!=undefined){
          this.isPetsAllowed=data.isPetsAllowed;
        }
        if(data.isParkingAvailable!=undefined){
          this.isParkingAvailable=data.isParkingAvailable;
        }
        if(data.isPartyingAllowed!=undefined){
          this.isPartyingAllowed=data.isPartyingAllowed;
        }
        if(data.isSmokingAllowed!=undefined){
          this.isSmokingAllowed=data.isSmokingAllowed;
        }
        if(data.isSharingAllowed!=undefined){
          this.isSharingAllowed=data.isSharingAllowed;
        }
        
        if(data.availabeDate){
          this.availabeDate=data.availabeDate;
        }
        if(data.bedRoomCount){
          this.bedRoomCount=data.bedRoomCount;
        }
        if(data.bathRoomCount){
          this.bathRoomCount=data.bathRoomCount;
        }
        if(data.availableParkingSlots){
          this.availableParkingSlots=data.availableParkingSlots;
        }
        if(data.allowedOccupantCount){
          this.allowedOccupantCount=data.allowedOccupantCount;
        }
        if(data.price){
          this.price=data.price;
        }
        if(data.thumbNailImageData){
          this.thumbNailImageData=new PropertyImageData(data.thumbNailImageData);
        }
        if(data.thumbNailImage){
          this.thumbNailImage=new Image(data.thumbNailImage);
        }
    }
}
  // thumbNailPath:string|undefined=undefined;
  propertyUID?:string;
  propertyListingUID?:string;
  title?:string;
  description?:string;
  location?:string;
  landmark?:string;
  isNew:boolean=false;
  isStudentFriendly=false;
  isPetsAllowed=false;
  isParkingAvailable=false;
  isPartyingAllowed=false;
  isSmokingAllowed=false;
  isSharingAllowed=false;
  availabeDate?:string;
  bedRoomCount?:number;
  bathRoomCount?:number;
  availableParkingSlots?:number;
  allowedOccupantCount?:number;
  price?:number;
  thumbNailImageData?:PropertyImageData;
  thumbNailImage?:Image;
}