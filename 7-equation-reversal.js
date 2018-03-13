//https://www.codewars.com/kata/simple-equation-reversal/train/javascript

function solve(eq){
    let reversed = eq.split('').reverse().join();
    let reversedArray = Array.from(reversed);
    let correctedArray = [];
    
    for (let i=0; i<reversedArray.length; i++) {
      let character = reversedArray[i];
      let numberHolder = [];
      
      //if character is not an integer, add it to the end of an array
      if (!Number.isInteger(character)){
        correctedArray.push(character);
      }
      //others must be integers so add the to the start of a new array
      numberHolder = numberHolder.unshift(character);
      
      /*if one number is an integer but the next is not, 
      put the whole unreversed number back into the corrected array
      and empty the numberHolder variable*/
      
      if (Number.isInteger(character) && !Number.isInteger(reversedArray[i+1])){
          correctedArray.push(numberHolder);
            numberHolder = [];
      }
    }
    
    return correctedArray.join();
  }