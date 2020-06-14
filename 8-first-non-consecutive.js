// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {
  let counter;

  for (let i=0;i<arr.length;i++) {
    if ( arr[i-1] && (arr[i] !== (arr[i-1] + 1))) {
      counter = arr[i];
      break;
    } else if (i === arr.length-1) {
      counter = null;
      break;
    } else {
      continue;
    };
  }

console.log(firstNonConsecutive([1,2,3,4,6,7,8])); // 6