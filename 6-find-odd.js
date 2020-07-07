// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(array) {
  let odd = 0;

  array.forEach(element => {
    const original = element;
    let originalCounter = 0;

    for (let i=0; i<array.length; i++){
      const current = array[i];

      if (current === original) {
        originalCounter++;
      };
    };

    if (originalCounter % 2 === 1) {
        odd = original;
    };
  });

  return odd;
}

console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ])); // -1
