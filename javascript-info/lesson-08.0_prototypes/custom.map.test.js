/**
 * TODO: is under construction
 * 
 * after implementation
 * arr.customMap(fn) should work like a arr.map(fn)
 */
Array.prototype.customMap = function (callback, item) {
  console.log(`callback: ${callback}, item: ${item}`)
  return callback.call(this, item)
}
function aplyCustomMap(fn, ...arr) {
  return arr.customMap(fn)
}

//const result = [ 1, 2, 3, 4 ].customMap(item => item += 1)

describe('customMap', () => {
  test('[ 1, 2, 3, 4 ] mapped by item => item += 1', () => {
    const input = [1, 2, 3, 4]
    const expected = [2, 3, 4, 5]
    const actual = aplyCustomMap(item => item += 1, input)
    console.log(`actual: ${actual}`)

    // expect(actual).toEqual(expected)
  })
})