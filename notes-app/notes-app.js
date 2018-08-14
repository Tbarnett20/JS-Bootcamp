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

const filters = {
  searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
      const noteEl = document.createElement('p')
      noteEl.textContent = note.title
      document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = "Button was clicked"
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes,filters)
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