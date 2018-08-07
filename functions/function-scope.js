// Global Scope (convertFahrenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)


let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  
  if (celsius <= 0) {
    let isFreezing = true
  }

  return celsius
}

let convertedTemp1 = convertFahrenheitToCelsius(32)
let convertedTemp2 = convertFahrenheitToCelsius(68)
console.log(convertedTemp1)
console.log(convertedTemp2)