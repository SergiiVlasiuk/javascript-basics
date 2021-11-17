let user = {
  name: "Ion",
  age: 30,

  sayHi() {
    // this - это "текущий объект"
    return `Hi ${this.name}`
  },
  property4: function () {
    return `property4: ${this.name}`
  },
  arrow: () => `arrow: ${this.name}`,
  thisIsNotUsed: function () {
    return `thisIsNotUsed: ${name}`
  },
}

user.takePlace = function () {
  return `${this.name} take your place`
}

module.exports = user
