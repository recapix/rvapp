import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough'
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// Components
import { PreloadImage } from '../components/preload-image/preload-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';

// Functionalities
import { ValidatorsModule } from '../components/validators/validators.module';

// Providers
import { FacebookLoginService } from '../providers/facebook/facebook-login.service';
import {HttpClientModule, HttpClient} from "@angular/common/http";

import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';   
import { LanguageService } from '../providers/language/language.service';
import { HttpModule } from '@angular/http';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    PrivacyPolicyPage,
    SignupPage,
    TabsPage,
    WalkthroughPage,
    TermsOfServicePage,
    PreloadImage,
    ShowHideContainer,
    ShowHideInput
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
		TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
      	useFactory: (createTranslateLoader),
        deps: [HttpClient]
		    }
		}),
		ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    PrivacyPolicyPage,
    SignupPage,
    TabsPage,
    WalkthroughPage,
    TermsOfServicePage,
  ],
  providers: [
    NativeStorage,
    StatusBar,
    SplashScreen,
    LanguageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    FacebookLoginService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
