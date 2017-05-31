import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root:any = 'ProfilePage';
  tab2Root:any = 'DenunciaPage';
  tab3Root:any = 'HistoricoPage';

  constructor(public navCtrl: NavController) {

  }

}
