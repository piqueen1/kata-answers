//https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

function modifiedSum(array, number) {
  const raised = array.reduce((a,b) => a + (b**number), 0);
  const arrSum = array.reduce((a,b) => a + b, 0);

  return raised - arrSum;
}

console.log(modifiedSum([1, 2, 3], 3)); // 30