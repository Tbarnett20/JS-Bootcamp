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

const incomplete = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incomplete.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
});
// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Im adding a todo')
})