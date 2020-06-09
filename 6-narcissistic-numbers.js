//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const digits = value.toString().length;
  const dig1 = parseInt(value.toString().split('')[0]);

  return dig1;
}

console.log(narcissistic( 371 )); // true