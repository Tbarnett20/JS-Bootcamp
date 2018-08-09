const todos = [
  {text: 'Finish Lambda',
  completed: false,},
  {text: 'Search for a job',
  completed: true,},
  {text: 'Get a job',
  completed: true,},
  {text: 'Move into an apartment',
  completed: false,},
  {text:'Get a car',
  completed: false,}
]

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
      if (a.completed === false && b.completed === true) {
        return - 1
      } else if (!b.completed && a.completed) {
        return 1
      } else {
        return 0
      }
  })
}

sortTodos(todos)
console.log(todos)

 const deleteTodo = function (todos, todoText) {
   const index = todos.findIndex(function (todo) {
     return todo.text.toLowerCase() === todoText.toLowerCase()
   })
   if (index > -1) {
     todos.splice(index, 1)
   }
 }

 deleteTodo(todos, 'get a car')

 const getThingsTodo = function (todos, query) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}
console.log(getThingsTodo(todos))


 /* LONG WAY below and short way above ^^^
 const getThingsTodo = function (todos, query) {
  return todos.filter(function (todo, index) {
    const textMatch = todo.text.toLowerCase().includes(query.toLowerCase())
    const notCompleted = todo.completed === false
    return textMatch && notCompleted
  })
}
console.log(getThingsTodo(todos, ''))

*/




  /* first argument is the "todos" to look through and 2nd is the text: we wanna compare
 const deleteTodo = function (todos, todoText) {
 ** This gives us the index of what we searched for for example 'get a car' was 4 **
   const index = todos.findIndex(function (todo) {
     return todo.text.toLowerCase() === todoText.toLowerCase()
   })
 ** This makes the code only work if it exist at all so anything greater than -1 then splice() deletes it when we call it through deleteTodo(todos, 'get a car') **
   if (index > -1) {
     todos.splice(index, 1)
   }
 }
 */

//  const deletedTodo = deleteTodo(todos, 'get a car')
// console.log(deletedTodo)

//  todos.splice(4,1)


// console.log(todos.length)
// console.log(`You have ${todos.length} todos`)

// // ForEach
// todos.forEach(function (todo, index) {
//   console.log(`${index + 1}: ${todo}`)
// })

// // For Loop
// for (let i = 0; i < todos.length; i++) {
//    console.log(`${i + 1}: ${todos[i]}`)
// }

// let first = todos[0]
// let secondToLast = todos[todos.length - 2]


// let whatYouHaveTodo1 = `Todo: ${first}`
// console.log(whatYouHaveTodo1)

// let whatYouHaveTodo2 = `Todo: ${secondToLast}`
// console.log(whatYouHaveTodo2)


// todos.splice(2,1)
// todos.push('Go on vacation')
// todos.shift()
// console.log(todos)

