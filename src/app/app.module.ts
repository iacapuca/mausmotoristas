import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { TextMaskModule } from 'angular2-text-mask';


export const firebaseCredential = {
  apiKey: "AIzaSyBMLThjvNG1kUxi-2bNrzstpRuKfropv3I",
  authDomain: "mausmotoristas.firebaseapp.com",
  databaseURL: "https://mausmotoristas.firebaseio.com",
  projectId: "firebase-mausmotoristas",
  storageBucket: "firebase-mausmotoristas.appspot.com",
  messagingSenderId: "91634570690"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCredential),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TextMaskModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule { }
