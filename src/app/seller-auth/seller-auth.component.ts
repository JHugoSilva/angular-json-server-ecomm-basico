import { Component, OnInit } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  showLogin = false
  authError:string = ''

  constructor(private seller:SellerService) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data:SignUp):void {
    this.seller.userSignUp(data)
  }

  login(data:Login):void {
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if (isError) {
        this.authError = "Email or password is not correct";
      }
    });

  }

  openLogn() {
    this.showLogin = true
  }

  openSignUp() {
    this.showLogin = false
  }

}
