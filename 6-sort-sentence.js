// https://www.codewars.com/kata/52dffa05467ee54b93000712/train/javascript

// 0. strip off punctuation
// 1. split into lower and upper case arrays of words
// 2. lowercase ordered ascending
// 3. lowercase moved to final array
// 4. uppdercase ordered descending
// 5. uppercase appended to final array
// 6. join array back to string

function sort(sentence){
  const noPunctRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const words = sentence.replace(noPunctRegex, '').split(' ');
  const lowerSorted = words.filter( word => word[0] === word[0].toLowerCase() ).sort((a, b) => a.localeCompare(b));
  const upperSorted = words.filter( word => word[0] === word[0].toUpperCase() ).sort((a, b) => b.localeCompare(a));
  const finalArray = lowerSorted.concat(upperSorted)
  return finalArray.join(' ')
}

console.log(sort("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights")) // "as habitan he him himself his in in is of of own rights the treating I Alleghanies"