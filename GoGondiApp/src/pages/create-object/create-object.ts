import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular'
import { Object } from '../../models/object';
import { AlertController } from 'ionic-angular';
import { MapProvider } from '../../providers/map/map';
import { ObjectProvider } from '../../providers/object/object'

@IonicPage()
@Component({
  selector: 'page-create-object',
  templateUrl: 'create-object.html',
})
export class CreateobjectPage {

  object: Object= {
    name: "",
    address: "",
    category: "",
    location: null,
  };
  
  constructor(public navCtrl: NavController, public MapProv: MapProvider, private alertCtrl: AlertController, public viewCtrl: ViewController, public modalCtrl: ModalController, private op: ObjectProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  addObject(){
    if(this.object.name == ""|| this.object.address == "" || this.object.category ==""){
      const alert = this.alertCtrl.create({
        title: 'Input missing',
        subTitle: 'Please fill in the mising Information',
        buttons: ['Dismiss']
      });
      alert.present();
} else{
  this.op.insertObject(this.object).subscribe(
    data =>this.viewCtrl.dismiss()
  );
}
    }

    geocode(): void{
      this.MapProv.geocode(this.object.address).subscribe(data => {
        this.object.address =data.address;
        this.object.location= data.location;
      })
    }

  dismiss(){
    let data = {};
    this.viewCtrl.dismiss(data);
  }

}

