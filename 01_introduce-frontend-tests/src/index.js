const calcUtil = require('./calc-util.js')

document.getElementById('calc').addEventListener('click', () => {
  const value1 = Number(document.getElementById('value1').value)
  const value2 = Number(document.getElementById('value2').value)

  const result = calcUtil.add(value1, value2)
  document.getElementById('result').innerText = result
})
