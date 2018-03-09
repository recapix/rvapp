import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// Components
import { PreloadImage } from '../components/preload-image/preload-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';

// Functionalities
import { ValidatorsModule } from '../components/validators/validators.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    WalkthroughPage,
    PreloadImage,
    ShowHideContainer,
    ShowHideInput
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
		ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    WalkthroughPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
