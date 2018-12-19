import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateObjectPage } from './create-object';

@NgModule({
  declarations: [
    CreateObjectPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateObjectPage),
  ],
})
export class CreateObjectPageModule {}
