import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property, PropertyFilter } from '../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PropertyService {

  private apiFilterUrl:string="/api/Property/Listing/Filter/All";
  constructor(private http: HttpClient,@Inject('API_BASE_URL') private baseUrl:string) { }

  getProperties(filter:PropertyFilter):Observable<any>{
      let url=this.baseUrl+this.apiFilterUrl;
      return this.http.post(url,filter,{
        responseType:"json",
    }).pipe(map(properties=>{
          debugger;
          // result:Property[]=[];
          // properties.forEach(element => {
          //   var resultElement=new Property(element);
          //   result.push(resultElement);
          // });
          // return result;
    }));
  }

}
