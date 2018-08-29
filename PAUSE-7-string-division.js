// https://www.codewars.com/kata/simple-string-division/train/javascript

console.log('***start***');

function solve(str, k) {
  let maxNum = 0;

  if (k === 0) {
    return parseInt(str);
  }

  //loop through numbers in str
  for (let i = 1; i < str.length; i++) {
    let preNum = 0;
    let postNum = 0;

    preNum = parseInt(str.slice(0, i));
    postNum = parseInt(str.slice(i));

    if (preNum > maxNum) {
      maxNum = preNum;
    }

    if (postNum > maxNum) {
      maxNum = postNum;
    }

  }
  return maxNum;
}

console.log(solve('1234', 1))
console.log('*** end ***');
