console.log('***START***');
function correct(string) {
  let array = string.split('');
  let corrected = [];

  for (char in array) {
    const current = array[char];

    switch (current) {
      case '5':
        corrected.push('S');
        break;
      case '0':
        corrected.push('O');
        break;
      case '1':
        corrected.push('I');
        break;
      default:
        corrected.push(current);
    }
  }
  //let parsed = parseInt(array);
  //if (isNaN(parsed)) { return 0 }
  //for each letter, see if it can be a number
  //if it's not, push it to the new array
  //if it is, switch to the right case
  //push that to the new array

  return corrected.join('');
}
console.log("Answer: ", correct("L0ND0N"));
console.log('***END***');