// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(array) {
  let pairArray = [];
  let odd = 0;
  
  array.forEach(element => {
    const original = element;
    let originalCounter = 0;

    for (let i=0; i<array.length; i++){
      const current = array[i];
      
      if (current === original) {
        originalCounter++;
      };

      if (originalCounter % 2 === 1) {
        console.log(`I am odd, I am ${original}`);
        odd === original;
      };
    };
  });

  return odd;
  //the value of the odd key
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5

// for each element look at every element in the array
// compare to index 0.  If element matches index, object gets { elementCounter : element }
// return that key:value pair into a big object
// return the element value of the largest elementCounter
