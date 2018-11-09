// https://www.codewars.com/kata/string-merge/train/javascript

console.log('***start***');

function stringMerge(string1, string2, letter) {
  // split strings into arrays for looping
  let array1 = string1.split('');
  let array2 = string2.split('');
  let sharedIndex1 = array1.indexOf(letter);
  let sharedIndex2 = array2.indexOf(letter);
  let mergedString = string1.slice(0, sharedIndex1) + string2.slice(sharedIndex2);

  return mergedString;
}

console.log(stringMerge("person", "here", "e")); // "pere"
console.log('*** end ***');
