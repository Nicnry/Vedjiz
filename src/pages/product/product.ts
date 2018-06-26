import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { SupplierPage } from '../supplier/supplier'

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  product: Product
  productForm: FormGroup
  private showForm: boolean
  private quantity: number = 1
  private supplierToOrder: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private toastCtrl: ToastController, private dataProvider: DataProvider) {
    this.product = navParams.get('product')
    this.initForm()
    if (this.product.stock < this.product.low_stock_threshold){
      this.quantity = 0
    }
  }

  cancel() {
    this.initForm()
  }

  saveNewValue() {
    this.newToast()
  }

  cancelNewValue() {
    this.initForm()
  }

  save() {
    this.product.price = this.productForm.controls.price.value
    this.product.unit = this.productForm.controls.unit.value
    this.product.stock = this.productForm.controls.stock.value
    this.product.edited = true
    this.dataProvider.setProducts()
    this.dataProvider.setEditInProgress(true)
    this.initForm()
  }

  ionViewCanLeave() {
    if (this.productForm.dirty) {
      this.presentToast()
    }
    return !this.productForm.dirty
  }

  initForm() {
    this.productForm = this.formBuilder.group({
      low_stock_threshold: [this.product.low_stock_threshold],
      price: [this.product.price],
      unit: [this.product.unit],
      stock: [this.product.stock]
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Vous devez enregistrer ou annuler les modifications en cours.',
      duration: 3000,
    });

    toast.present()
  }
  newToast() {
    let toast = this.toastCtrl.create({
      message: "Erreur lors de l'envois",
      duration: 3000,
    });

    toast.present()
  }

  // Show the form
  order() {
    this.showForm = !this.showForm
  }



  // Add quantity
  addQuantity() {
    this.quantity++
  }

  addQuantityUser() {
    if (this.quantity < this.product.stock-this.product.low_stock_threshold) {
      this.quantity++
    }
  }

  // Remove quantity
  removeQuantity() {
    if (this.quantity > 1 ) {
      this.quantity -= 1
    }
  }

  // Open page supplier
  openSupplier(supplier) {
    this.navCtrl.push(SupplierPage, {'supplier': supplier})
  }
}
