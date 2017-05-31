import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the HistoricoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  ListaPlaca: FirebaseListObservable<any[]>;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, public afDB: AngularFireDatabase) {}


  ngOnInit() {
    this.getPlacas();
  }

  getPlacas() {
   this.ListaPlaca = this.afDB.list('/ListaPlaca');
 }

 public createPlaca() {
  this.editPlaca(null, true);
}

editPlaca(placa, isNew: boolean) {
    let prompt = this.alertCtrl.create({
      title: isNew ? 'Criar Placa' : 'Atualizar Placa',
      inputs: [
        {
          name: 'placa',
          placeholder: 'Númeração',
          value: placa ? placa.placa : '',
        },
        {
          type: 'radio',
          name: 'tipo',
          label: 'Taxi',
          value: placa ? placa.tipo : 'taxi',
          checked: true

        },
        {
          type: 'radio',
          name: 'tipo',
          label: 'Ônibus',
          value: placa ? placa.tipo : 'bus',
          checked: true

        },
        {
          type: 'radio',
          name: 'tipo',
          label: 'Taxi',
          value: placa ? placa.tipo : 'car',
          checked: true

        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: placa ? 'Atualizar' : 'Adicionar',
          handler: data => {
            if (isNew) {
              this.ListaPlaca.push({ 'placa': data.placa, 'tipo' : data.tipo });
            } else {
              this.ListaPlaca.update(placa, { placa: data.placa });
            }
          }
        }
      ]
    });
    prompt.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }

  select(item){
    console.log(item.placa);
  }

}
