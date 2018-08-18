// Return the output array, and ignore all non-op characters
// https://www.codewars.com/kata/make-the-deadfish-swim

function parse(sequence) {
  const sequenceArray = sequence.split('');
  let answerArray = [];
  let total = 0;

  let operations = {
    'i': () => {
      total = total + 1;
    },
    'd': () => {
      total = total - 1;
    },
    's': () => {
      total = total * total;
    },
    'o': () => {
      answerArray.push(total);
    },
  }

  for (let i = 0; i < sequenceArray.length; i++) {
    let instruction = sequenceArray[i];
    if (!/[idso]/.test(instruction)) { continue };
    operations[instruction]();
  }

  return answerArray;
}

// parse("iiisdoso") // returns [8,64]