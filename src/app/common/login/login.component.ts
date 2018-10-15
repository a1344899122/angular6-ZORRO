import { Component, OnInit } from '@angular/core';
import  {ConfigService} from './../../common/service/common/sys-common.service'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'nz-demo-form-normal-login',
  templateUrl: './login.component.html',
  styles: [ `
    .login-form {
      max-width: 300px;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
    .login{
      height:100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
  ]
})
export class  LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,private configService:ConfigService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  config;
  headers;
  error;
  login() {
    this.configService.login('zhy','888888')
    .subscribe(
      isLoggedIn => {
       console.log(isLoggedIn)
      }, // success path
      error => this.error = error // error path
    );
  }

 
}
