// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  const sum = marks.reduce(getSum, 0)
  
  function getSum(total, num) {
    return (total + num)
  }

  return Math.floor(sum/(marks.length))
}

console.log(getAverage([2,2,2,2])) // 2