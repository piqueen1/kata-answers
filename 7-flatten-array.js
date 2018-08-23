// https://www.codewars.com/kata/flatten-and-sort-an-array/train/javascript

console.log('***Start***');

function flattenAndSort(array) {
  const flatArray = array.reduce((a, b) => {
    return a.concat(b);
  }, ([]));
  return flatArray.sort((a, b) => a - b);
}

flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]);

console.log(flattenAndSort([3, 2, 1], [4, 6, 5], [], [9, 7, 8]), 'should be  [1, 2, 3, 4, 5, 6, 7, 8, 9]');
console.log('***End***');