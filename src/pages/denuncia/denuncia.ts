
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',

})
export class DenunciaPage {
  ListaPlaca: FirebaseListObservable<any[]>;
    public placaModel: string;
    public tipoModel: string;
    public mask : Array<string | RegExp>
    toastOptions: ToastOptions;




  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase, private toast: ToastController,) {
    this.ListaPlaca = this.afDB.list('/ListaPlaca');
    this.mask =  [/[A-z]/, /[A-z]/, /[A-z]/,'-', /\d/, /\d/, /\d/, /\d/]
  }

 ngOnInit(){
 }

  public createPlaca(){
    this.placaModel =  this.placaModel.replace(/-/gi,'')
    this.placaModel =  this.placaModel.replace(/_/gi,'')
    this.ListaPlaca.push({placa:this.placaModel, tipo:this.tipoModel});
    this.toastOptions = {
      message: "Denuncia da placa " + this.placaModel + " efetuada.",
      duration: 3000,
      position: 'top',
    }
    this.toast.create(this.toastOptions).present();
    this.placaModel = '';


}
}
