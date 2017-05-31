import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DenunciaPage } from './denuncia';
import { TextMaskModule } from 'angular2-text-mask';
import { PlacaPipeModule } from '../../pipes/placa/placa.module';



@NgModule({
  declarations: [
    //PlacaPipe,
    DenunciaPage
  ],
  imports: [
    IonicPageModule.forChild(DenunciaPage),TextMaskModule,PlacaPipeModule
  ],
  exports: [
    DenunciaPage
  ]
})
export class DenunciaPageModule {}
