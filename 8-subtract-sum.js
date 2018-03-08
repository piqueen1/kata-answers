//https://www.codewars.com/kata/subtract-the-sum/train/javascript

function SubtractSum(n){
    let value = n, sum = 0;
    
    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    
    const fruitCode = n - value;
    
    return fruitCode;
  }