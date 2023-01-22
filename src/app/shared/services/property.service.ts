import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image, Property, PropertyFilter, PropertyImageData } from '../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PropertyService {

  private apiFilterUrl:string="/api/Property/Listing/Filter/All";
  constructor(private http: HttpClient,@Inject('API_BASE_URL') private baseUrl:string) { }

  getProperties(filter:PropertyFilter):Observable<any>{
    let url=this.baseUrl+this.apiFilterUrl;

    return this.getApiProperties(url,filter).pipe(map(properties=>{
          let input=properties as Array<object>;
          let result=Array<Property>();
          input.forEach(
            element=>{
              result.push(new Property(element))
            }
          )
          return result;
    }));
  }

  private getApiProperties(url:string,filter:PropertyFilter):Observable<any>{
    // return new Observable((subscriber)=>{
    //   let properties=this.getLocalProperties();
    //   subscriber.next(properties);
    // });

    return this.http.post(url,filter,{
      responseType:"json",
    });

  }

  private getLocalProperties():Array<Property>{
    let result=new Array<Property>();
    var p1=new Property();
    p1.propertyUID="1";
    p1.propertyListingUID="1";
    p1.title="4 bed terraced house to rent";
    p1.description="4 bed terraced house to rent";
    p1.location="Oxford Street, Middlesbrough TS1";
    p1.landmark="0.5 miles Middlesbrough";
    p1.isNew=true;
    p1.isStudentFriendly=true;
    p1.isPetsAllowed=true;
    p1.isParkingAvailable=true;
    p1.bedRoomCount=4;
    p1.bathRoomCount=2;
    p1.listingDate="13th Dec 2022";
    p1.availableDate="7th Jul 2023";
    p1.isPartyingAllowed=false;
    p1.isSmokingAllowed=false;
    p1.isSharingAllowed=false;
    p1.price=2850.00;
    
    p1.availableParkingSlots=2;
    p1.allowedOccupantCount=8;   
    p1.thumbNailImageData=new PropertyImageData();
    p1.thumbNailImage=new Image();
    p1.thumbNailImage.uid="1"
    p1.thumbNailImage.imageType="ThumbNail";
    p1.thumbNailImage.imageTypeUID=1;
    p1.thumbNailImage.fileName="project-img-01";
    p1.thumbNailImage.image="../../assets/images/project-img-01.jpg"
    result.push(p1);

    p1=new Property();
    p1.propertyUID="2";
    p1.propertyListingUID="2";
    p1.title="2 BHK house to rent";
    p1.description="2 BHK house to rent";
    p1.location="Oxford Street, Middlesbrough TS1";
    p1.landmark="0.5 miles Middlesbrough";
    p1.isNew=true;
    p1.isStudentFriendly=true;
    p1.isPetsAllowed=true;
    p1.isParkingAvailable=true;
    p1.bedRoomCount=2;
    p1.bathRoomCount=2;
    p1.listingDate="13th Dec 2022";
    p1.availableDate="7th Jul 2023";
    p1.price=1250;

    p1.isPartyingAllowed=false;
    p1.isSmokingAllowed=false;
    p1.isSharingAllowed=false;  
    p1.availableParkingSlots=2;
    p1.allowedOccupantCount=4;   
    p1.thumbNailImageData=new PropertyImageData();
    p1.thumbNailImage=new Image();
    p1.thumbNailImage.uid="2"
    p1.thumbNailImage.imageType="ThumbNail";
    p1.thumbNailImage.imageTypeUID=1;
    p1.thumbNailImage.fileName="project-img-02";
    p1.thumbNailImage.image="../../assets/images/project-img-02.jpg"
    result.push(p1);

    p1=new Property();
    p1.propertyUID="3";
    p1.propertyListingUID="3";
    p1.title="1 BHK Appartmet to rent";
    p1.description="1 BHK Appartmet to rent";
    p1.location="Oxford Street, Middlesbrough TS1";
    p1.landmark="0.5 miles Middlesbrough";
    p1.isNew=false;
    p1.isStudentFriendly=true;
    p1.isPetsAllowed=true;
    p1.isParkingAvailable=true;
    p1.bedRoomCount=1;
    p1.bathRoomCount=1;
    p1.listingDate="13th Dec 2022";
    p1.availableDate="7th Jul 2023";
    p1.price=1550;

    p1.isPartyingAllowed=false;
    p1.isSmokingAllowed=false;
    p1.isSharingAllowed=false;  
    p1.availableParkingSlots=1;
    p1.allowedOccupantCount=2;   
    p1.thumbNailImageData=new PropertyImageData();
    p1.thumbNailImage=new Image();
    p1.thumbNailImage.uid="3"
    p1.thumbNailImage.imageType="ThumbNail";
    p1.thumbNailImage.imageTypeUID=1;
    p1.thumbNailImage.fileName="project-img-03";
    p1.thumbNailImage.image="../../assets/images/project-img-03.jpg"
    result.push(p1);

    p1=new Property();
    p1.propertyUID="4";
    p1.propertyListingUID="4";
    p1.title="The Orchard at West Park";
    p1.description="The Orchard at West Park";
    p1.location="Edward Pease Way, West Park Garden Village, Darlington";
    p1.landmark="2 miles Darlington";
    p1.isNew=true;
    p1.isStudentFriendly=false;
    p1.isPetsAllowed=true;
    p1.isParkingAvailable=false;
    p1.bedRoomCount=1;
    p1.bathRoomCount=1;
    p1.listingDate="13th Dec 2022";
    p1.availableDate="7th Jul 2023";
    p1.price=550;

    p1.isPartyingAllowed=false;
    p1.isSmokingAllowed=false;
    p1.isSharingAllowed=false;  
    p1.availableParkingSlots=0;
    p1.allowedOccupantCount=2;   
    p1.thumbNailImageData=new PropertyImageData();
    p1.thumbNailImage=new Image();
    p1.thumbNailImage.uid="4"
    p1.thumbNailImage.imageType="ThumbNail";
    p1.thumbNailImage.imageTypeUID=1;
    p1.thumbNailImage.fileName="project-img-04";
    p1.thumbNailImage.image="../../assets/images/project-img-04.jpg"
    result.push(p1);

    p1=new Property();
    p1.propertyUID="5";
    p1.propertyListingUID="5";
    p1.title="4 bed terraced house to rent";
    p1.description="4 bed terraced house to rent";
    p1.location="Bennard Street, Middlesbrough";
    p1.landmark="0.5 miles Middlesborough";
    p1.isNew=true;
    p1.isStudentFriendly=true;
    p1.isPetsAllowed=true;
    p1.isParkingAvailable=true;
    p1.bedRoomCount=4;
    p1.bathRoomCount=2;
    p1.listingDate="13th Dec 2022";
    p1.availableDate="7th Jul 2023";
    p1.price=1850;

    p1.isPartyingAllowed=true;
    p1.isSmokingAllowed=true;
    p1.isSharingAllowed=true;  
    p1.availableParkingSlots=2;
    p1.allowedOccupantCount=8;   
    p1.thumbNailImageData=new PropertyImageData();
    p1.thumbNailImage=new Image();
    p1.thumbNailImage.uid="5"
    p1.thumbNailImage.imageType="ThumbNail";
    p1.thumbNailImage.imageTypeUID=1;
    p1.thumbNailImage.fileName="project-img-05";
    p1.thumbNailImage.image="../../assets/images/project-img-05.jpg"
    result.push(p1);

    return result;
  }

}
