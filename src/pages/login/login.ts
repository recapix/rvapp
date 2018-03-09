import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;


  constructor(
    public nav: NavController
  ) {
   

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required)
    });
  }

  doLogin(){
    this.nav.setRoot(this.main_page.component);
  }

  doFacebookLogin() {
   
  }

  goToSignup() {
  }

  goToForgotPassword() {
  }

}
