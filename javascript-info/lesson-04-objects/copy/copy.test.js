const copyObject = require('./copy')

describe('copy', () => {
  let expected

  beforeEach(() => {
    expected = {
      user: "ion",
      age: 32,
    }
  })

  describe('object', () => {
    test('empty', () => {
      const actual = copyObject()

      expect(actual).toEqual({})
      expect(actual).toStrictEqual({})
      expect(Object.keys(actual).length).toBe(0)
    })

    test('single', () => {
      const actual = copyObject(expected)

      expect(actual).toEqual(expected)
      expect(actual).toStrictEqual(expected)
      expect(actual === expected).toBeFalsy()
    })

    test('duo', () => {
      const expected2 = { canView: true }

      const actual = copyObject(expected, expected2)

      expect(actual).not.toEqual(expected)
      expect(actual).not.toEqual(expected2)
      expect("user" in actual).toBeTruthy()
      expect("age" in actual).toBeTruthy()
      expect("canView" in actual).toBeTruthy()
    })

    test('duo with the same property, last one applied', () => {
      const expected2 = { canView: true }
      const expected3 = { canView: "GROUP" }

      const actual = copyObject(expected, expected2, expected3)

      expect(actual).not.toEqual(expected)
      expect(actual).not.toEqual(expected2)
      expect(actual).not.toEqual(expected3)
      expect("user" in actual).toBeTruthy()
      expect("age" in actual).toBeTruthy()
      expect("canView" in actual).toBeTruthy()
      expect(actual.canView).toBe(expected3.canView)
    })
  })
})
