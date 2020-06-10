//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const numberString = value.toString();
  const exponent = numberString.length;
  let sum = 0;

  for (let i=0;i<exponent;i++) {
    const currentDigit = parseInt(numberString.split('')[i]);
    const raised = currentDigit**exponent;

    sum += raised;
  };

  return sum === value;
};

console.log(narcissistic( 371 )); // true

//
