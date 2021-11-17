const user = require('./object-demo.service')

describe('object demo', () => {
  describe('has \'this\' object scope', () => {
    test('sayHi function', () => {
      expect(user.sayHi()).toEqual("Hi Ion")
    })

    test('property4 function', () => {
      expect(user.property4()).toEqual("property4: Ion")
    })

    test('takePlace function', () => {
      expect(user.takePlace()).toEqual("Ion take your place")
    })

    describe('exceptions', () => {
      test('thisIsNotUsed in function', () => {
        const callback = () => user.thisIsNotUsed()

        expect(callback).toThrow(ReferenceError)
      })

      test('passing \'this\' over \'?\'', () => {
        expect(user.name == "Ion").toBeTruthy()

        const hi = (user.name == "Ion" ? user.sayHi : user.takePlace)() // Ошибка!

        expect(hi).not.toEqual(user.takePlace())
        expect(hi).not.toEqual(user.sayHi())
      })

      test('passing \'this\' after extracting function', () => {
        const sayHi = user.sayHi

        // no this in the sayHi (the function is independent and not connected to user object)
        const hi = sayHi()

        expect(hi).not.toEqual(user.takePlace())
        expect(hi).not.toEqual(user.sayHi())
      })
    })
  })

  describe('has no \'this\' in object scope', () => {
    test('arrow function', () => {
      expect(user.arrow()).not.toEqual("arrow: Ion")
    })
  })

})
