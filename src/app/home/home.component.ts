import { Component, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../shared/models';
import { UserService } from '../shared/services';
import { WindowRef } from '../shared/wrappers/windowref';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User|undefined;

    constructor(private userService: UserService, @Inject("NativeWindow") private nativeWindow:WindowRef) { }

    ngOnInit() {
        this.user=this.userService.StoredUser;
        this.nativeWindow.getNativeWindow().addEventListener("scroll",()=>{
            stickyHeader();
        });
          var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
          );
          var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            // return new bootstrap.Tooltip(tooltipTriggerEl);
          });
    }
    
    ngOnDestroy(){
        let window=this.nativeWindow.getNativeWindow();
        window.removeEventListener("scroll",()=>{
            stickyHeader();
        });
    }

}

function stickyHeader() {
      // Get the header
  var header = document.getElementById("pgHeader");
  // Get the offset position of the navbar
  var sticky = header!.offsetTop;
  if (window.pageYOffset > sticky) {
    header!.classList.add("sticky");
  } else {
    header!.classList.remove("sticky");
  }
}
