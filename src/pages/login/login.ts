import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { FacebookLoginService } from '../../providers/facebook/facebook-login.service';
import { FacebookUserModel } from '../../providers/facebook/facebook-user.model';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  loading: any;
  user: FacebookUserModel = new FacebookUserModel();


  constructor(
    public nav: NavController,
    public facebookLoginService: FacebookLoginService,
    public loadingCtrl: LoadingController
  ) {
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin() {

  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.facebookLoginService.getFacebookUser()
      .then((user) => {
        this.user = user;
        this.loading.dismiss();
      }, (error) => {
        console.log(error);
        this.loading.dismiss();
      });
  }

  doFacebookLogout(){
    this.facebookLoginService.doFacebookLogout()
    .then((res) => {
      this.user = new FacebookUserModel();
    }, (error) => {
      console.log("Facebook logout error", error);
    });
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }

}
