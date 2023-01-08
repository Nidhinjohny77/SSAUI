import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, UserService } from 'src/app/shared/services';

@Component({ 
    templateUrl: 'login.component.html' ,
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup
    loading = false;
    submitted = false;
    returnUrl: string| undefined;
    errorMessage:string="An error occured";
    isError:boolean=false;
    isBtnClearDisbaled=false;
    isBtnLoginDisabled=false;

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

    onClear(){
        this.submitted=false;
        this.isError=false;
        this.errorMessage = "";
        this.loginForm.setValue({username:'',password:''});
    }

    onSubmit() {
        this.submitted=true;
        this.isError=false;
        this.errorMessage = "";
        this.setControlGroupStatus(true);

        // stop here if form is invalid
        if (this.loginForm?.invalid) {
            var hd=this.f['username'].errors;
            this.setControlGroupStatus(false);
            return;
        }
        
        this.authenticationService.login(this.f['username'].value,this.f['password'].value)
            .pipe(first())
            .subscribe(
                data => {
                    if(data){
                        this.loadUser();
                    }
                    else{
                        this.isError=true;
                        this.errorMessage = "Unable to login due to internal server issue.";
                        this.setControlGroupStatus(false);
                    }
                },
                error => {
                    this.isError=true;
                    this.errorMessage = "Invalid credentials.";
                    this.setControlGroupStatus(false);
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
                this.setControlGroupStatus(false);
            }
        )
    }

    private setControlGroupStatus(status:boolean){
        this.loading = status;
        this.isBtnClearDisbaled=status;
        this.isBtnLoginDisabled=status;
    }
}
