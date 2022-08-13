import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private snackbar:MatSnackBar,private router:Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
    
  }

  login() {
    
    if (this.loginForm.valid) {
      let reqData = {
        emailID: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      console.log(reqData);
      this.userService.loginUserService(reqData).subscribe((response: any) => {
        this.snackbar.open('Login successful','',{
          duration:2000,
        });
        localStorage.setItem("token",response.data);
      }, (error: any) => {
        this.snackbar.open('Invalid email or password','',{
          duration:2000,
        });
      })
    } else {
      this.snackbar.open('Please enter your email and password','',{
        duration:2000,
      });
    }
  }
}
