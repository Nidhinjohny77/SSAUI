import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, UserService } from 'src/app/shared/services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup
    loading = false;
    submitted = false;
    returnUrl: string| undefined;
    errorMessage:string="An error occured";
    isError:boolean=false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService:UserService
    ) { 
        this.loginForm=new FormGroup({
            username:new FormControl(''),
            password:new FormControl('')
        })
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm?.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm?.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f['username'].value,this.f['password'].value)
            .pipe(first())
            .subscribe(
                data => {
                    this.loadUser();
                },
                error => {
                    this.isError=true;
                    this.errorMessage = error;
                    this.loading = false;
                });
    }

    loadUser(){
        this.userService.getUser().pipe(first()).subscribe(
            data=>{
                this.router.navigate(['/home']);
            },
            error=>{
                this.isError=true;
                this.errorMessage = error;
            }
        )
    }
}
