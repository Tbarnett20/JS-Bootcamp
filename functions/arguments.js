// Multiple Arguments
let add = function (a, b, c) {
 return a + b + c
}
let result = add(10,1,5)
console.log(result);


// Default Arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 200)
console.log(scoreText)


// Challenge

let getTip = function (total, tipPercent = .20) {
  return `A ${tipPercent * 100}% tip on $${total} should be $${total * tipPercent}`
}

let tip = getTip(100)

console.log(tip)

let name = 'Terrance'
let adjective = 'awesome'
console.log(`${name} is fucking ${adjective}`)