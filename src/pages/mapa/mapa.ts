import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat:number;
  lng:number;

  constructor( public navParams: NavParams, private viewCtrl:ViewController ) {
    // this.lat = 17.989456;
    // this.lng = -92.9475061;

    let cordsArray = this.navParams.get("cords").split(",");
    this.lat = Number( cordsArray[0].replace("geo:","") );
    this.lng = Number( cordsArray[1] );

    console.log( this.lat,this.lng );
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }
}
