import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StartpagePage } from '../pages/startpage/startpage';
import { DetailsagePage } from '../pages/detailsage/detailsage';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartpagePage,
    DetailsagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartpagePage,
    DetailsagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Base64ToGallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
