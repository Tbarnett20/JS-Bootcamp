const notes = [{
 title: 'My next trip',
 body: 'I would like to go to Spain',
}, {
 title: 'Habbits to work on',
 body: 'Exercise. Eating a bit better',
}, {
 title: 'Office Modification',
 body: 'Get new computer'
},]

// // Removes from end
// console.log(notes.pop())

// // Adds to end
// notes.push('My New Note 4')

// // Removes from beginning
// console.log(notes.shift())

// // Adds to beginning
// notes.unshift('My Very First Note')

// Starts on index 1, then either decides to delete/replace a certain amount, and next can choosew to replace with something else
// notes.splice(1, 0, 'New Item')
// notes[2] = 'Terrance is the new Note 3'


// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })

// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// // Starteing from tend and looping thorugh
// for (let i = notes.length - 1; i >= 0; i--) {
//   console.log(notes[i])
// }

// Sorting through arrays
const sortNotes = function (notes) {
  notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return - 1
      } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
  })
}

sortNotes(notes)
console.log(notes)

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

// filtered though notes

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}
console.log(findNotes(notes, 'work'))
/*
const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}
console.log(filteredNotes)
*/

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const note = findNote(notes, 'office modification')
console.log(note)

// console.log(notes.length)
// // Got invidual string using bracket notation notes[0]
// console.log(notes)

// // Finds index in array
// const index = notes.findIndex(function (note, index) {
//   console.log(note)
//   return note.title === 'Habbits to work on'
// })
// console.log(index)
