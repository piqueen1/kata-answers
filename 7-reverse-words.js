// https://www.codewars.com/kata/reverse-words/train/javascript

console.log('***start***');

function reverseWords(str) {
  const wordArray = str.split(' ');
  let reversedArray = [];

  for (let i=0; i<wordArray.length; i++) {
    let word = wordArray[i];
    const reversedWord = word.split('').reverse().join('');

    reversedArray.push(reversedWord);
  }

  return reversedArray.join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log('*** end ***');