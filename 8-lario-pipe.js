// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

function pipeFix(numbers){
  const min = numbers.reduce(function(a, b) {
    return Math.min(a, b);
  });
  
  const max = numbers.reduce(function(a, b) {
    return Math.max(a, b);
  });
  
  let array =[]
  
  for (let i=min; i<=max; i++) {
    array.push(i)
  }

  return array
}

//SELF: FIGURE OUT HOW TO MAKE IT START NOT AT 1

console.log(pipeFix([1,2,3,5,6,8,9])) // [1,2,3,4,5,6,7,8,9]