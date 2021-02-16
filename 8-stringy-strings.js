// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
  let sequence = '1'

  for (let i=0; i<size - 1; i++) {
    if (sequence.length % 2 != 0) {
      sequence += '0'
    } else {
      sequence += '1'
    }
  }

  return sequence
}

console.log(stringy(5)) // '101'