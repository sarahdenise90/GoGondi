import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatePropertyPageModule } from '../pages/create-property/create-Property.module';
import { InfoPageModule } from '../pages/info/info.module';
import { PropertyProvider } from '../providers/property/property';
import { MapProvider } from '../providers/map/map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    InfoPageModule,
    HttpClientModule,
    CreatePropertyPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PropertyProvider,
    MapProvider
  ]
})
export class AppModule {}
