import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { User, UserType, SemesterType } from '../../models/app.model';
import { MatSnackBar } from '@angular/material';

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

  constructor(private router: Router, private fb: FormBuilder, 
    private api: ApiService,private snackBar: MatSnackBar) { }

  public form: FormGroup
  public registerForm: FormGroup


  register: boolean = false

  types = ['Aluno','Professor']
  semesters = ['EC1','EC2','EC3','EC4','EC5','EC6','EC7','EC8','EC9','EC10']

  ngOnInit() {
    
    this.form = this.fb.group({
      ra : ['',Validators.required],
      password : ['',Validators.required]
    })

    this.registerForm = this.fb.group({
      name : ['',Validators.required],
      type : [null, Validators.required],
      semester : [null],
      ra : ['',Validators.required],
      password : ['',Validators.required],
      verifyPassword : ['',Validators.required]
    },{
      validators: PasswordValidation.MatchPassword
    })

  }

  registerUser = async () => {

    let user : User = {
      name : this.registerForm.get('name').value,
      type : this.registerForm.get('type').value as UserType,
      ra : this.registerForm.get('ra').value,
      password : this.registerForm.get('password').value
    }

    if(user.type.toString() == 'Aluno' && user.semester == null) {
      this.showMessage('Por favor informar o semestre!')
      return
    }
    else {
      user.semester = this.registerForm.get('semester').value
    }

    if(await this.api.registerUser(user) != null){
      this.showMessage('Usuário cadastrado com sucesso!')
      this.register = false

    }
    else {
      this.showMessage('Error!')

    }

  }
  
  loginUser = async () => {

    let user = {
      ra : this.form.get('ra').value,
      password : this.form.get('password').value
    }    

    if(await this.api.login(user) != null){
      if(this.api.user.type.toString() == 'Aluno')
        this.router.navigate(['confirmation'])
      else
      this.router.navigate(['presence'])
    }
    else {
      this.showMessage('Usuário não encontrado!')
    }
  }

  showMessage = (message: string, action: string = '', duration: number = 3000) => {
    this.snackBar.open(message,action,{ duration: duration, verticalPosition : 'top', horizontalPosition : 'end' })
  }

}
