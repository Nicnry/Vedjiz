import { HttpClient } from '@angular/common/http';
import { Order } from './../../models/order';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, private dataProvider: DataProvider,public navParams: NavParams, private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandesPage');
  }

}
