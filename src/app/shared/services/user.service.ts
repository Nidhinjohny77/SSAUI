﻿import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    constructor(private http: HttpClient,@Inject('API_BASE_URL') private baseUrl:string) { }

    public get StoredUser():User|undefined{
        var jsonString=localStorage.getItem("currentUser");
        if(jsonString){
            var user=JSON.parse(jsonString)
            return new User(user);
        }
        else{
            return undefined;
        }
    }

    getUser() {
        return this.http.get<User>(`${this.baseUrl}/api/User`).pipe(map(user=>{
            var loggedInUser=new User(user);
            localStorage.setItem("currentUser",JSON.stringify(loggedInUser));
            return user;
        }));
    }

    removeUser(){
        localStorage.removeItem("currentUser");
    }
}