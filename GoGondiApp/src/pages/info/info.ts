import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Object } from '../../models/object'
import { ObjectProvider } from '../../providers/object/object';
declare var mapboxgl: any;

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  object: Object;  

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams,public op: ObjectProvider) {
  this.object = this.navParams.get("name");
    console.log(this.object);
    
  }

  ionViewDidLoad() {
    mapboxgl.accessToken='pk.eyJ1Ijoic2FyYWhkZW5pc2UiLCJhIjoiY2pwdHFlZGd4MDgxeDN4cDM4c25yYjNudiJ9.CTKyE-0kDXbLS8HBj35mtw';
    var map= new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 15,
      center: this.object.location
    });
    var marker = new mapboxgl.Marker()
    .setLngLat(this.object.location)
    .addTo(map);
  }
}
