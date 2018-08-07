// Can reassign this {let}
let isRaining = true

isRaining = false
console.log(isRaining)

// can't reassign this {const}
// But can change an objects property
const person = {
  name: 'Terrance'
}

person.name = 'Danckert'
console.log(person)