// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

console.log('***start***');

const oddCount = (n) => {
  if (!n || n < 0) {
    return 0;
  }

  return Math.floor(n / 2);
}

console.log(oddCount(7)); //3
console.log('*** end ***');