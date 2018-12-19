import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Object } from '../../models/object';
import { NgTemplateOutlet } from '@angular/common';
import { InfoPage } from '../info/info';
import { ModalController } from 'ionic-angular';
import { CreateobjectPage} from '../create-object/create-object'
import { ObjectProvider } from '../../providers/object/object';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  objects: Object[]
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public op: ObjectProvider) {

  }
//Events (Lifecycle)
  ionViewDidLoad(){
    this.op.loadObjects().subscribe(x => this.objects= x)   //x = die Rückgabe
  }

toOther(object: Object): void{
  this.navCtrl.push(InfoPage,{
    name: object
  });
}

openModal(){
  let CreateobjectPageModal = this.modalCtrl.create(CreateobjectPage);
  CreateobjectPageModal.present();

  CreateobjectPageModal.onDidDismiss(object =>{
  this.op.insertObject(object).subscribe();
  this.op.loadObjects().subscribe(object => this.objects =objects);
});
}
}

