// Undefined for variable
let name

name = 'Terrance'

if (name === undefined) {
  console.log('Please provide a name')
} else {
  console.log(name)
}

// Undefined for function agruments
let square = function (num) {
  console.log(num)
}

square()

// Undefined as function return default value
let result = square()
console.log(result)

// Null as assigned value
let age = 23
age = null
console.log(age)