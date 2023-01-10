import { Component, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../shared/models';
import { UserService } from '../shared/services';

declare function initializeSlick(factory:any):any;
declare function slickFactory():any;
declare function initializeCommon():any;
declare function toolTipInitialization():any;
declare function registerWindowScroll():any;
declare function unRegisterWindowScroll():any;

@Component({ 
  templateUrl: 'home.component.html' ,
  styleUrls:['./home.component.css']
})
export class HomeComponent {
    user: User|undefined;

    constructor(private userService: UserService) { }

    ngOnInit() {
      initializeSlick(slickFactory);
      initializeCommon();
      toolTipInitialization();
      registerWindowScroll();
    }
    
    ngOnDestroy(){
      unRegisterWindowScroll();
    }

}


