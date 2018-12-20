import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Property } from '../../models/property';
import { NgTemplateOutlet } from '@angular/common';
import { InfoPage } from '../info/info';
import { ModalController } from 'ionic-angular';
import { CreatePropertyPage} from '../create-property/create-Property'
import { PropertyProvider } from '../../providers/property/property';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  properties: Property[]
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public pp: PropertyProvider) {

  }
//Events (Lifecycle)
  ionViewDidLoad(){
    this.pp.loadProperties().subscribe(x => this.properties= x)   //x = die Rückgabe
  }

toOther(property: Property): void{
  this.navCtrl.push(InfoPage,{
    name: property
  });
}

openModal(){
  let CreatePropertyPageModal = this.modalCtrl.create(CreatePropertyPage);
  CreatePropertyPageModal.present();

  CreatePropertyPageModal.onDidDismiss(property =>{
  this.pp.insertProperty(property).subscribe();
  this.pp.loadProperties().subscribe(properties => this.properties =properties);
});
}
}

