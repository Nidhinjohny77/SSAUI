import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { AuthenticationService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,@Inject('API_BASE_URL') private apiUrl:string) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const currentToken = this.authenticationService.currentTokenValue;
        const isLoggedIn = currentToken && currentToken.accessToken;
        const isApiUrl = request.url.startsWith(this.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentToken.accessToken}`
                }
            });
        }

        return next.handle(request).pipe(tap((event: HttpEvent<any>)=>{
            var obj=event;
            debugger;
        }));
    }
}