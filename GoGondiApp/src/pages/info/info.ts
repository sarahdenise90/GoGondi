import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Property } from '../../models/property'
import { PropertyProvider } from '../../providers/property/property';
declare var mapboxgl: any;

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  property: Property;  

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams,public pp: PropertyProvider) {
  this.property = this.navParams.get("name");
    console.log(this.property);
    
  }

  ionViewDidLoad() {
    mapboxgl.accessToken='pk.eyJ1Ijoic2FyYWhkZW5pc2UiLCJhIjoiY2pwdHFlZGd4MDgxeDN4cDM4c25yYjNudiJ9.CTKyE-0kDXbLS8HBj35mtw';
    var map= new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 15,
      center: this.property.location
    });
    var marker = new mapboxgl.Marker()
    .setLngLat(this.property.location)
    .addTo(map);
  }
}
