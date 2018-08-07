//  === - equality operator
// !== - not equal
// < > - less than and greater than operator
// <= >= - less than or equal and greater than or equal operator

let temp = 110

let isFreezing = temp <= 32

if (isFreezing) {
  console.log('It is freezing outisde!')
} else {
  console.log('Its okay then')
}

if (temp >= 110) {
  console.log('ITS TOO DAMN HOT')
}


let age = 65
let isChild = age <= 7
let isSenior = age >= 65

console.log(isChild)
console.log(isSenior)

if (age <= 7) {
console.log('Give that kid a discount')
}

if (isSenior) {
  console.log("You're old, here's a discount")
}