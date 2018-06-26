import { HttpClient } from '@angular/common/http';
import { Order } from './../../models/order';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commandes',
  templateUrl: 'commandes.html',
})
export class CommandesPage {

  orders: Array<Order> = []

  constructor(public navCtrl: NavController, private dataProvider: DataProvider,public navParams: NavParams, private httpClient: HttpClient, private toastCtrl: ToastController) {
    this.update()
  }

  private async update() {
    try {
      await this.dataProvider.getCommandFromApi()
    } catch (error) {
      this.presentToast("Une erreur s'est produite !")
    }
  }

  async doRefresh(refresher) {
    try {
      await this.update()
      refresher.complete()
    } catch (error) {
      this.presentToast("Une erreur s'est produite !")
    }
  }

  presentToast(givemessage) {
    let toast = this.toastCtrl.create({
      message: givemessage,
      duration: 3000,
    });

    toast.present()
  }

  // Delete an order
  async deleteOrder(order) {
    try {
      await this.dataProvider.deleteCommand(order)
      this.presentToast("Commande supprimée !")
      await this.update()
    } catch (error) {
      this.presentToast("Une erreur s'est produite !")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandesPage');
  }

}
