import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.scss']
})
export class RegistationComponent implements OnInit {

  registationForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }


  ngOnInit() {
    this.registationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  registation() {
    if (this.registationForm.valid) {
      let reqData = {
        firstName: this.registationForm.value.firstName,
        lastName: this.registationForm.value.lastName,
        email: this.registationForm.value.email,
        password: this.registationForm.value.password,
        confirmPassword: this.registationForm.value.confirmPassword
      }
      this.userService.registerUserService(reqData).subscribe((response: any) => {
        console.log("registration succesful", response);
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
}