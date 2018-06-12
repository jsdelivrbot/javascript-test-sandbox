export class Item {
  constructor(
    private price: number = 0,
  ) {}

  calculateDiscount(rate: number): number {
    return this.price - (this.price * 0.01 * rate)
  }
}

export class CreditCard {
  no: string
  kind: string
}

export class Order {
  private items: Item[] = []
  private payment: number
  private paymentAt: Date = null
  private card?: CreditCard = null

  add(item: Item) {
    this.items.push(item)
  }

  calculateDiscount(rate: number): number {
    return this.items.reduce(
      (price, item) => price + item.calculateDiscount(rate),
      0
    )
  }

  pay(paymentAt: Date, discountRate: number = 0) {
    this.payment = this.calculateDiscount(discountRate)
    this.paymentAt = paymentAt
  }

  payByCreditCard(
    paymentAt: Date,
    discountRate: number = 0,
    card: CreditCard,
  ) {
    this.pay(paymentAt, discountRate)
    this.card = card
  }

  getPayment(): number {
    return this.payment
  }

  receipt(): string {
    return this.paymentAt.getFullYear() +
      '/' +
      (this.paymentAt.getMonth() + 1) +
      ' ' + this.payment + '円'
  }
}
