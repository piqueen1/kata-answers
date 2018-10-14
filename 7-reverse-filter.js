// https://www.codewars.com/kata/simple-fun-number-176-reverse-letter/train/javascript

console.log('***start***');

function reverseLetter(str) {
  const reversedArray = str.split('').reverse();
  const filteredArray = reversedArray.filter(char => /[a-zA-Z]/.test(char));

  return filteredArray.join('');

}

console.log(reverseLetter('ultr53o?n')); // "nortlu"
console.log('*** end ***');
