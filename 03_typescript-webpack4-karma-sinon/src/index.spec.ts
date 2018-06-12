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
      console.log('called spy.')
    }
  }
  sinon.spy(obj, 'method')
  obj.method()
})

it('stub', () => {
  const item = new Item()
  const stub = sinon.stub(item, 'calculateDiscount')

  stub.onCall(0).returns(70)
  stub.onCall(1).returns(80)

  const order = new Order()
  order.add(item)
  order.add(item)
  order.pay(new Date(), 20)

  expect(stub.withArgs(20).calledTwice).toBe(true)
  expect(order.getPayment()).toBe(150)

  const obj: any = {
    method() {
      console.log('called stub.')
    }
  }
  sinon.stub(obj, 'method')
  obj.method()
})

it('mock', () => {
  const item = new Item()
  const mock = sinon.mock(item)

  mock.expects('calculateDiscount')
    .twice()
    .withArgs(10)
    .returns(90)

  const order = new Order()
  order.add(item)
  order.add(item)

  order.pay(new Date(), 10)
  mock.verify()

  expect(order.getPayment()).toBe(180)
})
