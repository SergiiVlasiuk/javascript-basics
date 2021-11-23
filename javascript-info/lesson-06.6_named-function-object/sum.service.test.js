const { sumV1, sumV2 } = require('./sum.service')

describe('sum', () => {
  describe('V1', () => {
    test('"2" should be "2"', () => {
      const actual = sumV1(2)

      expect(actual.toString()).toEqual(2)
    })

    test('"(2)(3)(4)" should be "9"', () => {
      const actual = sumV1(2)(3)(4)

      expect(actual.toString()).toEqual(9)
    })

    test('"(2)(10)(3)(30)" should be "45"', () => {
      const actual = sumV1(2)(10)(3)(30)

      expect(actual.toString()).toEqual(45)
    })
  })

  describe('V2', () => {
    test('"(2)()" should be "2"', () => {
      const actual = sumV2(2)()

      expect(actual).toEqual(2)
    })

    test('"(2)(3)(0)(4)()" should be "9"', () => {
      const actual = sumV2(2)(3)(0)(4)()

      expect(actual).toEqual(9)
    })

    test('"(2)(10)(3)(30)()" should be "45"', () => {
      const actual = sumV2(2)(10)(3)(30)()

      expect(actual).toEqual(45)
    })
  })
})

