// https://www.codewars.com/kata/plus-minus-plus-plus-dot-dot-dot-count/train/javascript

console.log('***start***');

const catchSignChange = arr => {
  console.log(arr);

  let signChanges = 0;

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const previous = arr[i - 1];

    if (current * previous < 0 || (current === 0 && previous < 0) || (previous === 0 && current < 0)) {
      signChanges = signChanges + 1;
    }
  }

  return signChanges;
};

console.log(catchSignChange([1, 3, 4, 5])); // 0
console.log('*** end ***');

/* Mine worked!  Here's My favorite solution, reduce:

const catchSignChange = arr => {
  let count = 0;

  arr.reduce((previousValue, currentValue, index, array) => {
    const sign = currentValue >= 0;
    const previousSign = previousValue >= 0;

  if (previousSign !== sign && index > 0) {
      count++;
    }

    return currentValue;
  }, [])

  return count;
};
*/