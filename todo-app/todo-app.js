const ps = document.querySelectorAll('p')
// Removes all P tags
ps.forEach(function (p) {
  // If the text content in the pararagrap (p) contains 'The' remove it
 if (p.textContent.includes('The')) {
   p.remove()
 }
})

