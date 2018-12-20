import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePropertyPage } from './create-Property';

@NgModule({
  declarations: [
    CreatePropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePropertyPage),
  ],
})
export class CreatePropertyPageModule {}
