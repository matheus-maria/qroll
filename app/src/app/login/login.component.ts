import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
     let password = AC.get('password').value; // to get value in input tag
     let confirmPassword = AC.get('verifyPassword').value; // to get value in input tag
      if(password != confirmPassword) {
          AC.get('verifyPassword').setErrors( {MatchPassword: true} )
      } else {
          return null
      }
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  public form: FormGroup
  public registerForm: FormGroup


  register: boolean = false

  ngOnInit() {
    
    this.form = this.fb.group({
      ra : ['',Validators.required],
      password : ['',Validators.required]
    })

    this.registerForm = this.fb.group({
      ra : ['',Validators.required],
      password : ['',Validators.required],
      verifyPassword : ['',Validators.required]
    },{
      validators: PasswordValidation.MatchPassword
    })

  }

}
