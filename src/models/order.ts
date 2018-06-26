export class Order {
    id: number
    productName: string
    quantity: number
    companyName: string
    placed_by: string
  
    constructor(id: number, productName: string, quantity: number, companyName: string, placed_by: string) {
        this.id = id 
        this.productName = productName 
        this.quantity = quantity 
        this.companyName = companyName 
        this.placed_by = placed_by
    }
  
  }

  