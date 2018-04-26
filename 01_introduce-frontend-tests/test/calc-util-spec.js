// 2nd
const calcUtil = require('../src/calc-util.js')

describe('add関数のテスト', () => {
  it('1 + 2 は 3 である', () => {
    if (calcUtil.add(1, 2) === 3) {
    } else {
      throw new Error('失敗')
    }
  })

  it('1 + 2 は 4 である', () => {
    if (calcUtil.add(1, 2) === 4) {
    } else {
      throw new Error('失敗')
    }
  })
})