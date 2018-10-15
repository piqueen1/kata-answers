// https://www.codewars.com/kata/sort-one-three-two/train/javascript

console.log('***start***');

function sortByName(ary) {
  const table = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // map digits to strings
  const strings = ary.map(x => table[x]);

  return strings;
}

console.log(sortByName([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log('*** end ***');
