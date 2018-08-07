const todos = [
  'Finish Lambda',
  'Search for a job',
  'Get a job',
  'Move into an apartment',
  'Get a car'
]

console.log(todos.length)
console.log(`You have ${todos.length} todos`)
todos.forEach(function (item, index) {
  console.log(`${index + 1}: ${item}`)
})

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


