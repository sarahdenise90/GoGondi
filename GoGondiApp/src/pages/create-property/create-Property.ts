import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular'
import { Property } from '../../models/property';
import { AlertController } from 'ionic-angular';
import { MapProvider } from '../../providers/map/map';
import { PropertyProvider } from '../../providers/property/property'

@IonicPage()
@Component({
  selector: 'page-create-property',
  templateUrl: 'create-property.html',
})
export class CreatePropertyPage {

  property: Property= {
    name: "",
    address: "",
    category: "",
    location: null,
  };
  
  constructor(public navCtrl: NavController, public MapProv: MapProvider, private alertCtrl: AlertController, public viewCtrl: ViewController, public modalCtrl: ModalController, private pp: PropertyProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  addProperty(){
    if(this.property.name == ""|| this.property.address == "" || this.property.category ==""){
      const alert = this.alertCtrl.create({
        title: 'Input missing',
        subTitle: 'Please fill in the mising Information',
        buttons: ['Dismiss']
      });
      alert.present();
} else{
  this.pp.insertProperty(this.property).subscribe(
    data =>this.viewCtrl.dismiss()
  );
}
    }

    geocode(): void{
      this.MapProv.geocode(this.property.address).subscribe(data => {
        this.property.address =data.address;
        this.property.location= data.location;
      })
    }

  dismiss(){
    let data = {};
    this.viewCtrl.dismiss(data);
  }

}

