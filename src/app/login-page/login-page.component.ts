import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginform: any;
  loginDetails: LoginDetails;
  loginArr: LoginDetails[] = [];


  constructor(private router: Router) {
    this.loginDetails = new LoginDetails();
  }


  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [(Validators.required), (Validators.minLength(8)), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl(null, [(Validators.required), (Validators.minLength(8)), Validators.pattern('^[a-z]{8,}$')])
    })
  }
  emailErrors() {
    let email = this.loginform.get('email')
    if (!email.valid && email.touched) {
      if (email.errors.required) {
        return ('Email is required')
      } if (email.errors.pattern) {
        return ('please enter valid email format')
      }
    } return;
  }
  passwordErrors() {
    let password = this.loginform.get('password')
    if (!password.valid && password.touched) {
      if (password.errors.required) {
        return ('password is required')
      } if (password.errors.pattern) {
        return ('Enter minimum eight characters')
      }
    } return;
  }

  submitNavigate() {
    if (this.loginform.valid) {
      this.router.navigate(['/datapage']);
    }


    const userData = localStorage.getItem("LoginData");
    if (userData == null) {
      const newArr = [];
      this.loginDetails.UserId = 0;
      newArr.push(this.loginDetails);
      localStorage.setItem("LoginData", JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(userData);
      const newId = oldData.length + 1;
      this.loginDetails.UserId = newId;
      oldData.push(this.loginDetails);
      localStorage.setItem("LoginData", JSON.stringify(oldData));
    }
    this.loginDetails = new LoginDetails();
    this.getAllEmpoyee();
  }
  getAllEmpoyee() {
    const userData = localStorage.getItem("LoginData");
    if (userData != null) {
      const localData = JSON.parse(userData);
      this.loginArr = localData;
    }
  }

}

export class LoginDetails {
  UserId: number;
  LoginEmail: any;
  LoginPassword: any;
  constructor() {
    this.UserId = 0;
    this.LoginEmail = '';
    this.LoginPassword = '';
  }
}
