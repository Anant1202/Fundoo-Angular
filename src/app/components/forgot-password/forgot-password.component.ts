import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      

    });
  }

  forgotpassword(){
    if (this.forgotpasswordForm.valid) {
      let reqData = {
        email: this.forgotpasswordForm.value.email
        
      }
      this.userService.forgotpasswordUserService(reqData).subscribe((response: any) => {
        console.log("forgot password successful", response);
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
}
