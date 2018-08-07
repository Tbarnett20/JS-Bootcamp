// Function - Input(argument(s)), code, output(return value)

let greetUser = function () {
  console.log('Welcome user!')
}
// Function Called!
greetUser()
greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius
}

let convertedTemp1 = convertFahrenheitToCelsius(32)
let convertedTemp2 = convertFahrenheitToCelsius(68)
console.log(convertedTemp1)
console.log(convertedTemp2)