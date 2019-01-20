
function main() {
  let obj = {
    sum(x, y) {
      return x + y
    }
  }

  let foo = {
    calc: function (x, y) {
      return this.sum(x, y)
    }
  }

  console.log(foo.calc.bind(obj, 1, 2)())  // 3
  console.log(foo.calc.call(obj, 1, 2))    // 3
  console.log(foo.calc.apply(obj, [1, 2])) // 3

  console.log('Done')
}

main()

module.exports = main
