// https://www.codewars.com/kata/remove-duplicate-words/train/javascript

console.log('***start***');

function removeDuplicateWords(s) {
  const array = s.split(' ');

  const uniqueArray = array.filter((x, i, a) => a.indexOf(x) == i);

  return uniqueArray.join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); // 'alpha beta gamma delta');
console.log('*** end ***');