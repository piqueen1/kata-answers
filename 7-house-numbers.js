// https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum/train/javascript

console.log('***start***');

function houseNumbersSum(inputArray) {
  let sum = 0;

  for (let i=0; i<inputArray.length; i++) {
    sum = sum + inputArray[i];

    if (inputArray[i] === 0) {
      return sum;
    }
    continue;
  }

  return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])); // 11
console.log('*** end ***');