// DOM - Document Object Model

const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain',
 }, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better',
 }, {
  title: 'Office Modification',
  body: 'Get new computer'
 }]

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = "Button was clicked"
})



document.querySelector('#remove-all').addEventListener('click', function (e) {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})


document.querySelector('#search-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})







// // const p = document.querySelector('p')
// // p.remove()

// // Query all and remove

// const ps = document.querySelectorAll('p')
// // Removes all P tags
// // ps.forEach(function (p) {
// //   p.remove()
// // })

// // Cobsole logs all P tags
// ps.forEach(function (p) {
//   console.log(p.textContent)
// })
// //  prints to screen
// ps.forEach(function (p) {
//   p.textContent = '*******'
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)