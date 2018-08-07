const todos = [
  'Finish Lambda',
  'Search for a job',
  'Get a job',
  'Move into an apartment',
  'Get a car'
]

console.log(todos.length)
console.log(`You have ${todos.length} todos`)

// ForEach
todos.forEach(function (todo, index) {
  console.log(`${index + 1}: ${todo}`)
})

// For Loop
for (let i = 0; i < todos.length; i++) {
   console.log(`${i + 1}: ${todos[i]}`)
}

// let first = todos[0]
// let secondToLast = todos[todos.length - 2]


// let whatYouHaveTodo1 = `Todo: ${first}`
// console.log(whatYouHaveTodo1)

// let whatYouHaveTodo2 = `Todo: ${secondToLast}`
// console.log(whatYouHaveTodo2)


todos.splice(2,1)
todos.push('Go on vacation')
todos.shift()
console.log(todos)


