// https://www.codewars.com/kata/unflatten-a-list-easy/train/javascript

console.log('***start***');

function unflatten(flatArray) {
  let array = [];

  for (let i=0; i<flatArray.length; i++) {
    const current = flatArray[i];
  
    if (current < 3) {
      
      array.push(current);
    } else {
      let nestedArray = [];

      for (let j = 0; j < current; j++) {
        if (!flatArray[i]) {continue;};
        nestedArray.push(flatArray[i]);
        if (j === current - 1) {
          continue;
        }
        i++;
      }
      array.push(nestedArray);
    }
  }

  return array;
}

const input = [1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3];
console.log(unflatten(input)); //
// expected = [1, [4, 5, 2, 1], 2, [4, 5, 2, 6], 2, [3, 3]];
console.log('*** end ***');

/*
This produces the following:
***start***
[ 1, [ 4, 5, 2, 1 ], [ 4, 5, 2, 6 ], [ 3, 3, undefined ] ]
*** end ***
So: it makes arrays of the correct numbers, then skips a 2,
then makes another correct array.  The final array returns undefined

*/