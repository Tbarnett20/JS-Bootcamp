// DOM - Document Object Model

// const p = document.querySelector('p')
// p.remove()

// Query all and remove

const ps = document.querySelectorAll('p')
// Removes all P tags
// ps.forEach(function (p) {
//   p.remove()
// })

// Cobsole logs all P tags
ps.forEach(function (p) {
  console.log(p.textContent)
})
//  prints to screen
ps.forEach(function (p) {
  p.textContent = '*******'
})

// Add a new element