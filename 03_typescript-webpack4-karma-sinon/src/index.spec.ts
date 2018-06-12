import { CreditCard, Item, Order } from './index'
import * as sinon from 'sinon'

it('spy', () => {
  const item = new Item(100)
  const spy = sinon.spy(item, 'calculateDiscount')

  const order = new Order()
  order.add(item)
  order.add(item)
  order.pay(new Date(), 20)

  expect(spy.withArgs(20).calledTwice).toBe(true)
  expect(order.getPayment()).toBe(160)

  const obj: any = {
    method() {
      console.log('called.')
    }
  }
  sinon.spy(obj, 'method')
  obj.method()
})
