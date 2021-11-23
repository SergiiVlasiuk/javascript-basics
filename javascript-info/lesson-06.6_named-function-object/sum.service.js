function sumV1(a) {
  let currentSum = a

  function f(b) {
    currentSum += b
    return f
  }

  f.toString = function () {
    return currentSum
  }

  return f
}

function sumV2(num1) {
  return (num2) => (num2 == null || num2 == undefined) ? num1 : sumV2(num1 + num2)
}

module.exports = { sumV1, sumV2 }
