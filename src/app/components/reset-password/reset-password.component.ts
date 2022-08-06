import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
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
        console.log("reset password successful", response);
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
}
