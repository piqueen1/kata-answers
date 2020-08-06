//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(numString){
  const intArray = numString.split('').map( x => parseInt(x,10) );
  return intArray.map(x => x<5 ? '0' : '1').join('');
}

console.log(fakeBin('45385593107843568'))// '01011110001100111')
