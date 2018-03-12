import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough'
import { TranslateService } from '@ngx-translate/core';
import { LangChangeEvent } from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WalkthroughPage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    public translate: TranslateService,
    splashScreen: SplashScreen) {

    translate.setDefaultLang('en');
    translate.use('en');


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        platform.setDir('rtl', true);
        platform.setDir('ltr', false);
      }
      else {
        platform.setDir('ltr', true);
        platform.setDir('rtl', false);
      }
      
      
    });


  }
}
