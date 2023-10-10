import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  loginForm!: FormGroup
  constructor (public formbuilder: FormBuilder, public _http:HttpClient, public _router:Router)
  {

  }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })  
  }

  logIn()
  {
    console.log(this.loginForm.value)
    alert ("Marvellous" + 'logged in Successfully')
    this._router.navigate(['/restaurant'])
    this.loginForm.reset()
  }
}

