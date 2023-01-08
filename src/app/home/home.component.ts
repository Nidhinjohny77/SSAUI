import { Component, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../shared/models';
import { UserService } from '../shared/services';

declare function initializeCommon():any;
declare function toolTipInitialization():any;
declare function registerWindowScroll():any;
declare function unRegisterWindowScroll():any;

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User|undefined;

    constructor(private userService: UserService) { }

    ngOnInit() {
      initializeCommon();
      toolTipInitialization();
      registerWindowScroll();
    }
    
    ngOnDestroy(){
      unRegisterWindowScroll();
    }

}


