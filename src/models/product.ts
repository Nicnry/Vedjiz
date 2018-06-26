import { Supplier } from './supplier';

export class Product {
  id: number
  name: string
  unit: string
  price: number
  stock: number
  low_stock_threshold: number
  picture: string
  suppliers: Array<Supplier>
  edited: boolean

  constructor(id: number, name: string, price: number, unit: string, stock: number, low_stock_threshold: number,picture: string, suppliers: Array<Supplier> = []) {
    this.id = id
    this.name = name
    this.price = price
    this.unit = unit
    this.stock = stock
    this.low_stock_threshold = low_stock_threshold
    this.picture = picture
    this.suppliers = suppliers
    this.edited = false;
  }

}