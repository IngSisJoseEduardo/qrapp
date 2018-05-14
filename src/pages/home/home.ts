import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';
import { HistorialService } from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    private platform: Platform,
    private _historialService:HistorialService
  ) {

  }

  scan(){
    console.log("Scaneando codigo ...");

    if( !this.platform.is('cordova') ){
      // this._historialService.agregar_historial("https://extraviados.com.mx");
      this._historialService.agregar_historial("geo:17.989456,-92.9475061");
      return;
    }
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Esta es la data del codigo', barcodeData);
      console.log("result", barcodeData.text);
      console.log("format", barcodeData.format);
      console.log("cnacelled", barcodeData.cancelled);

      if( barcodeData.cancelled == false && barcodeData.text != null ){
        this._historialService.agregar_historial( barcodeData.text );
      }
    }).catch(err => {
      console.log('Error', err);
      this.mostrar_error("Error: "+err);
    });
    
  }

  mostrar_error( mensaje:string ){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
}
