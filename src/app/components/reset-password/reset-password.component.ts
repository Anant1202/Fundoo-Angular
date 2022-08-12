import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar:MatSnackBar) { }
  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
      
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  resetpassword(){
    if (this.resetpasswordForm.valid) {
      let reqData = {
        password: this.resetpasswordForm.value.password,
        confirmPassword: this.resetpasswordForm.value.confirmPassword
      }
      this.userService.resetpasswordUserService(reqData).subscribe((response: any) => {
        this.snackbar.open('Reset successful','',{
          duration:2000,
        });
        
      }, (error: any) => {
        this.snackbar.open('Invalid password or confirmpassword','',{
          duration:2000,
        });
      })
    } else {
      this.snackbar.open('Please enter password','',{
        duration:2000,
      });
    }
  }
}
