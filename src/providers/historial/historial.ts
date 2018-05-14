import { Injectable } from '@angular/core';
import { ModalController } from "ionic-angular";
import { MapaPage } from "../../pages/mapa/mapa";

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ScanData } from "../../models/scan-data.models";
@Injectable()
export class HistorialService {

  private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser, private modalCtrl:ModalController) { }

  agregar_historial(texto:string){
    let data = new ScanData( texto );

    this._historial.unshift( data );

    console.log( this._historial );
    
    this.abrir_scan(0);
  }

  abrir_scan( index:number ){
    let scanData = this._historial[ index ];
    console.log( scanData );

    switch (scanData.tipo) {
      case "http":
          this.iab.create(scanData.info ,"_system");
        break;
    
      case "mapa":
          this.modalCtrl.create(MapaPage,{ cords:scanData.info}).present();
        break;
    
      default:
        console.error("tipo no soportado");
        
        break;
    }
    
  }

  cargarHistorial(){
    return this._historial;
  }

}
