const notes = ['Note 1', 'Note 2', 'Note 3']

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
notes[2] = 'Terrance is the new Note 3'


notes.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})

console.log(notes.length)
// Got invidual string using bracket notation notes[0]
console.log(notes)



for (let count = 0; count <= 2; count++) {
  console.log(count)
}

// Starteing from tend and looping thorugh
for (let i = notes.length - 1; i >= 0; i--) {
  console.log(notes[i])
}
