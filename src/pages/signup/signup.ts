import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { FacebookLoginService } from '../../providers/facebook/facebook-login.service';


@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: FormGroup;
  loading: any;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public facebookLoginService: FacebookLoginService,
    public loadingCtrl: LoadingController
  ) {

    this.signup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
  }

  doSignup(){

  }

  doFacebookSignup() {
    this.loading = this.loadingCtrl.create();
    // Here we will check if the user is already logged in
    // because we don't want to ask users to log in each time they open the app
    let env = this;

    this.facebookLoginService.getFacebookUser()
    .then(function(data) {
       // user is previously logged with FB and we have his data we will let him access the app

    }, function(error){
      //we don't have the user data so we will ask him to log in
      env.facebookLoginService.doFacebookLogin()
      .then(function(res){
        env.loading.dismiss();
        
      }, function(err){
        console.log("Facebook Login error", err);
        env.loading.dismiss();
      });
    });
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage);
    modal.present();
  }

}
