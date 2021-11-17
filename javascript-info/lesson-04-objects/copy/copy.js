function copyObject() {
  console.log(`arguments: ${arguments};`, arguments)

  return (Object.keys(arguments).length === 0)
    ? {} : Object.assign({}, ...Object.values(arguments))
}

module.exports = copyObject
