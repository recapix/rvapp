import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
// import { SignupPage } from '../signup/signup';

@Component({
  selector: 'walkthrough-page',
  templateUrl: 'walkthrough.html'
})
export class WalkthroughPage {
  login: FormGroup;
  validationError: string;

  lastSlide = false;

  @ViewChild('slider') slider: Slides;

  constructor(public nav: NavController) {

    this.validationError = null;
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    
  }

  skipIntro() {
    // You can skip to main app
    // this.nav.setRoot(TabsNavigationPage);

    // Or you can skip to last slide (login/signup slide)
    this.lastSlide = true;
    this.slider.slideTo(this.slider.length());
  }

  onSlideChanged() {
    // If it's the last slide, then hide the 'Skip' button on the header
    this.lastSlide = this.slider.isEnd();
  }

  goToLogin() {
     this.nav.push(LoginPage);
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }


  public doLogin(values){
    debugger;
  }
}
