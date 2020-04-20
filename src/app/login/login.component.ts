import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService} from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor( private formBuilder: FormBuilder,private router: Router, private authenticationService: AuthenticationService
    ){ 
      
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            mail: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    // convenience getter for easy access to form fields
    get formControls() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
        this.authenticationService.login(this.formControls.mail.value, this.formControls.password.value)
    }

}