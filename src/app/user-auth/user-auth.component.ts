import { Component, OnInit } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin:boolean = true
  authError:string = ""

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.userAuthReload()
  }

  signUp(data:SignUp) {
    this.user.userSignUp(data)
  }

  signLogin(data:Login) {
      this.user.userLogin(data)
      this.user.inValidUserAuth.subscribe((result)=>{
        console.warn('apple', result)
        if (result) {
          this.authError = "Please enter valid user details"
        }
      })
  }

  openLogin() {
    this.showLogin = true
  }

  openSignUp() {
    this.showLogin = false
  }
}
