// https://www.codewars.com/kata/form-the-minimum/train/javascript

console.log('***start***');

function minValue(values) {
  let uniqueSorted = parseInt([...new Set(values)].sort((a,b) => a - b).join(''));


return uniqueSorted;
}

console.log(minValue([1, 3, 1])); // 13;
console.log('*** end ***');