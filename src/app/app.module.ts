var firebaseConfig = {
  apiKey: "AIzaSyBIKN5XQNkPHIqsNKSjDO8V2X8NPSE4LbY",
  authDomain: "modesk-2477d.firebaseapp.com",
  databaseURL: "https://modesk-2477d.firebaseio.com",
  projectId: "modesk-2477d",
  storageBucket: "modesk-2477d.appspot.com",
  messagingSenderId: "672719663063",
  appId: "1:672719663063:web:899b220f5bc58837b56592",
  measurementId: "G-5T9E1NZW9E"
};

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({

  
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireDatabaseModule
  
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
