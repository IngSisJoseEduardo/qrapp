import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


// plugin
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from '@agm/core';

import { 
    HomePage, 
    GuardadosPage,
    MapaPage,
    TabsPage
  } from "../pages/index.paginas";

// servicios
import { HistorialService } from '../providers/historial/historial';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePage,
    GuardadosPage,
    MapaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQiBc7aOFg8k9Ykb-cVrJf-rFLUmAeB4U'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePage,
    GuardadosPage,
    MapaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialService
  ]
})
export class AppModule {}
