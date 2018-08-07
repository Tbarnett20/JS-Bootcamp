let name = '  Terrance Danckert  '

//  Length Property
// .length
console.log(name.length)

// Convert to upper case
// .toUpperCase()
console.log(name.toUpperCase())

// Convert to lower case
// .toLowerCase()
console.log(name.toLowerCase())

// Includes Method/ passes in an argument
// .includes()

let password = 'abc23password098'
password.includes('password')

console.log(password.includes('password'))

// Trim / removes extra whitespace from each edge
// trim()

console.log(name.trim())


isValidPassword = function (password) {
  password = password.toUpperCase()
 if (password.length >= 8 && !password.includes('PASSWORD')) {
   return true
 } else {
   return `This password is not valid`
 }
}

console.log(isValidPassword("Stuff"))
console.log(isValidPassword("ProgrammingStuff"))
console.log(isValidPassword("ProgrammingStuffPassword"))