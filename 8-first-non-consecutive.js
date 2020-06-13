// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {
  let counter = 0;
  console.log('array: ', arr);

  for (let i=0;i<arr.length;i++) {
    if (!arr[i+1]) {
      counter = null;
      break;
    } else if ( arr[i-1] && (arr[i] !== (arr[i-1] + 1))) {
      counter = arr[i];
      break;
    } else {
      continue;
    };
  }

  return counter;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8])); // 6