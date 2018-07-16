//8 kyu All Star Code Challenge #18
//

console.log('***START***');
function strCount(str, letter) {
  if (str === '') {
    return 0;
  }

  const strArray = str.split('');

  return strArray.reduce((count, item) => {
    if (item === letter) {
      count += 1;
    }
    return count;
  }, 0);
}
console.log("Answer: ", strCount('Hello', 'o'));
console.log('***END***');