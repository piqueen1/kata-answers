// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

console.log('***start***');

function oddCount(n) {
  let count = 0;
  let i = 0;

  do {
    if (isOdd(i)) {
      ++count;
    }
    ++i;
  } while (i < n);

  return count;
}

function isOdd(n) {
  return n % 2 === 1 ? true : false;
}

console.log(oddCount(7));
console.log('*** end ***');