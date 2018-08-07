let num = 23.23 
// Lets you show a specfic decimal
console.log(num.toFixed(2))

// round number
// Math.round

console.log(Math.round(num))

// round down
// Math.floor
// round up
// Math.ceil
console.log(Math.floor(num))
console.log(Math.ceil(num))

// Generates a random number
// Math.random()
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)


let makeGuess = function (userGuess) {
let min = 1
let max = 10
let computerGuess = Math.floor(Math.random() * (max - min + 1)) + min
 if (computerGuess === userGuess) {
  return 'Correct'
} else {
  return 'Incorrect'
  }
}

console.log(makeGuess(5))
