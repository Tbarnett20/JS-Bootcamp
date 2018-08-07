let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}
//  dot notation
console.log(myBook.title)

// template string
console.log(`${myBook.title} by ${myBook.author}`)


// Changing object properties

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)


let person = {
  name: 'Terrance',
  age: 23,
  location: 'Morehead'
}

console.log(`${person.name} is ${person.age} and he is from ${person.location}`)

person.age ++

console.log(`${person.name} is ${person.age} and he is from ${person.location}`)

