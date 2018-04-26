// 2nd
const assert = require('assert')
const calcUtil = require('../src/calc-util.js')

describe('add関数のテスト', () => {
  it('1 + 2 は 3 である', () => {
    assert(calcUtil.add(1, 2) === 3)
  })

  it('1 + 2 は 4 である', () => {
    assert(calcUtil.add(1, 2) === 4)
  })
})