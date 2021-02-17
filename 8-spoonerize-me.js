// https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript

function spoonerize(words) {
  const wordArray = words.split(' ')
  const firstLetter1 = wordArray[1].charAt(0) + wordArray[0].slice(1)
  const firstLetter2 = wordArray[0].charAt(0) + wordArray[1].slice(1)

  return firstLetter1 + ' ' + firstLetter2
}

console.log(spoonerize("nit picking")) // "pit nicking"