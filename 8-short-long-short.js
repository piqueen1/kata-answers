//https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b){
  if (b.length > a.length) {
    return a + b + a
  } else {
    return b + a + b
  }
}

console.log(solution('45', '1')) // '1451'