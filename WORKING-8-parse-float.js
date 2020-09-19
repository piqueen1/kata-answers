// https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

function parseF(s) {
  console.log(s)
  
  if (isNaN(s)) {
    return null 
    } else if (s === true || false) {
    return null
    } else {
    return parseFloat(s)
  }
}

console.log(parseF("1")) //, 1.0);)

// problem: passes all except one