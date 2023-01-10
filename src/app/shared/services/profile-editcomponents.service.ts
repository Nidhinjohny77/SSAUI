import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tenant } from '../models/tenant';
import { Property, PropertyFilter } from '../models';

@Injectable()
export class ProfileEditService {
    private apiFilterUrlTenant:string="/api/Tenant/Profile/Create";
    private apiFilterUrlTenantPreference:string="/api/Tenant/Preference/Create";
    private apiFilterUrlstudentprofile:string="/api/Student/Profile/Create";
    constructor(private http: HttpClient,@Inject('API_BASE_URL') private baseUrl:string) { }

    public get StoredUser():User|undefined{
        var jsonString=localStorage.getItem("currentUser");
        if(jsonString){
            var user=JSON.parse(jsonString)
            return user;
        }
        else{
            return undefined;
        }
    }

    getUser() {
        return this.http.get<User>(`${this.baseUrl}/api/User`).pipe(map(user=>{
            localStorage.setItem("currentUser",JSON.stringify(user));
            return user;
        }));
    }

    postSudentprofile(filter:PropertyFilter):Observable<any>{
      let url=this.baseUrl+this.apiFilterUrlstudentprofile;
      return this.http.post(url,filter,{
        responseType:"json",
    }).pipe(map(properties=>{
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

    postTenantPreference(filter:PropertyFilter):Observable<any>{
      let url=this.baseUrl+this.apiFilterUrlTenantPreference;
      return this.http.post(url,filter,{
        responseType:"json",
    }).pipe(map(properties=>{
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

    postTenant(filter:PropertyFilter):Observable<any>{
      let url=this.baseUrl+this.apiFilterUrlTenant;
      return this.http.post(url,filter,{
        responseType:"json",
    }).pipe(map(properties=>{
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
    // postUser() {
    //     return this.http.post<Tenant>(`${this.baseUrl}/api/Tenant/Profile/Create`).pipe(map(Tenant=>{
    //         localStorage.setItem("currentUser",JSON.stringify(Tenant));
    //         return Tenant;
    //     }));
    // }
}