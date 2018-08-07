let temp = 75

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if atleast one side is true

if (temp >= 60 && temp <= 90) {
  console.log(`It's pretty nice out`)
} else if (temp <= 0 || temp >= 120) {
  console.log(`Do not go outside`)
} else {
  console.log('Do what ya want')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer up some vegan dishes')
} else {
  console.log('Offer up anything ya got!')
}