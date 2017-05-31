import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoPage } from './historico';
import { PlacaPipeModule } from '../../pipes/placa/placa.module';


@NgModule({
  declarations: [
    HistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoPage),PlacaPipeModule
  ],
  exports: [
    HistoricoPage
  ]
})
export class HistoricoPageModule {}
