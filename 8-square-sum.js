// https://www.codewars.com/kata/square-n-sum

console.log('***START***');

function squareSum(numbers) {

  if (numbers.length === 0) { return 0 };

  const reducer = (accumulator, currentValue) => accumulator + Math.pow(currentValue, 2);

  return numbers.reduce(reducer);
}

squareSum([-12, -3, 13, 20, -14]);


console.log("Answer: ", squareSum([-12, -3, 13, 20, -14])) // 918
console.log('***END***');