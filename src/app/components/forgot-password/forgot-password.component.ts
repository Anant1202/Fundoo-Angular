import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      

    });
  }

  forgotpassword(){
    if (this.forgotpasswordForm.valid) {
      let reqData = {
        EmailID: this.forgotpasswordForm.value.email
        
      }
      console.log(reqData);
      this.userService.forgotpasswordUserService(reqData).subscribe((response: any) => {
        console.log(response);
        this.snackbar.open('Forget password successful','',{
          duration:2000,
        });
        
      }, (error: any) => {
        console.log(error);
        this.snackbar.open('Invalid email','',{
          duration:2000,
        });
      })
    } else {
      this.snackbar.open('Please enter your email ','',{
        duration:2000,
      });
    }
  }
}
