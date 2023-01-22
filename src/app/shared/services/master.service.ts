import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnishType } from '../models/furnishtype';
import { PropertyType } from '../models/propertytype';
import { MultiSelectData } from '../utilities';

@Injectable()
export class MasterService {



  constructor(private http: HttpClient,@Inject('API_BASE_URL') private baseUrl:string) { 
    
  }

  getFurnishTypes():Observable<any>{
    
    return new Observable((subscriber)=>{
      let fTypes=this.getLocalFurnishTypes();
        subscriber.next(fTypes)
    });

  }

  getPropertyTypes():Observable<any>{
    return new Observable((subscriber)=>{
      let pTypes=this.getLocalPropertyTypes();
      subscriber.next(pTypes);
    });
  }

  getRooms(limit:number,controlContext?:string):Array<MultiSelectData>{
    let rooms=new Array<MultiSelectData>();
    for(var i=1;i<=limit;i++){
      var room=new MultiSelectData();
      room.uid=i;
      room.displayName=i.toString();
      room.isEnabled=false;
      if(controlContext!=null){
        room.controlContextName=controlContext;
      }
      rooms.push(room);
    }
    return rooms;
  }

  private getLocalFurnishTypes():Array<FurnishType>{
    let fTypes=new Array<FurnishType>();
    var ft1=new FurnishType();
    ft1.uid=1;
    ft1.name="Fully Furnished";
    fTypes.push(ft1);
    var ft2=new FurnishType();
    ft2.uid=2;
    ft2.name="Semi Furnished";
    fTypes.push(ft2);
    var ft3=new FurnishType();
    ft3.uid=3;
    ft3.name="Non Furnished";
    fTypes.push(ft3);
    return fTypes;
  }

  private getLocalPropertyTypes():Array<PropertyType>{
    let pTypes=new Array<PropertyType>();
    var pt1=new PropertyType();
    pt1.uid=1;
    pt1.name="Flat";
    pTypes.push(pt1);

    var pt2=new PropertyType();
    pt2.uid=2;
    pt2.name="Hostel";
    pTypes.push(pt2);

    var pt3=new PropertyType();
    pt3.uid=3;
    pt3.name="Paying Guest";
    pTypes.push(pt3);

    var pt4=new PropertyType();
    pt4.uid=4;
    pt4.name="House in Single Occupancy";
    pTypes.push(pt4);

    var pt5=new PropertyType();
    pt5.uid=5;
    pt5.name="House in Multiple Occupancy";
    pTypes.push(pt5);

    return pTypes;
  }
  
}
