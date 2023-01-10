import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Token } from '../models';
import { Message } from '../models/message';


@Injectable()
export class AuthenticationService {
    private loginUrl="/api/Authentication/Login";
    private logoutUrl="/api/Authentication/LogOut";
    private currentTokenSubject: BehaviorSubject<Token|undefined>;
    private currentToken: Observable<Token|undefined>;

    constructor(private http: HttpClient,@Inject('API_BASE_URL') private baseUrl:string) {
        this.currentTokenSubject = new BehaviorSubject<Token|undefined>(this.GetCurrentTokenValue());
        this.currentToken = this.currentTokenSubject.asObservable();
    }

    public get currentTokenValue(): Token|undefined {
        return this.currentTokenSubject.value;
    }

    GetCurrentTokenValue(): Token|undefined{
        var jsonString=localStorage.getItem('currentToken');
        if(jsonString){
            return new Token(JSON.parse(jsonString));
        }
        return undefined;
    }

    login(username: string, password: string) {
        var url=this.baseUrl+this.loginUrl;
        return this.http.post<any>(url, { username, password },{
            responseType:"json",
        })
            .pipe(map(token => {
                                
                // login successful if there's a jwt token in the response
                if (token && token.accessToken) {
                    var uiToken=new Token(token);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentToken', JSON.stringify(uiToken));
                    this.currentTokenSubject.next(uiToken);
                    return uiToken;
                }
                else{
                    return undefined;
                }

            }));
    }

    logout() {       
        var url=this.baseUrl+this.logoutUrl;
        var currentToken=this.GetCurrentTokenValue();
        if(currentToken){
            return this.http.post<any>(url, currentToken,{
                responseType:"json",
            }).pipe(map(response=>{
                
                // remove user from local storage to log user out
                localStorage.removeItem('currentToken');
                this.currentTokenSubject.next(undefined);
                return response;
            }));
        }
        return new Observable((subscriber)=>{
            var errorMsg=new Message();
            errorMsg.messageCode="76777"
            errorMsg.message="Unable to connect to server."
            subscriber.error(errorMsg);
        });
            
    }
}