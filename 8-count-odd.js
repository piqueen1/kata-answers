// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

console.log('***start***');

function oddCount(n) {
  let count = 0;
  i = 0;

  while (i < n) {
    if (i % 2 === 1) {
      count++;
    }
    i++;
  }
  return count;
}

console.log(oddCount(7));
console.log('*** end ***');