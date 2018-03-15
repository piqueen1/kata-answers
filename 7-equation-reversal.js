console.log("****Start****");
//https://www.codewars.com/kata/subtract-the-sum/train/javascript

function solve(eq){
  let reversedArray = eq.split('').reverse();
  let correctedArray = [];
  
  for (let i=0; i<reversedArray.length; i++) {
    let character = reversedArray[i];
    let numberHolder = [];
    let isCharacterNumber = parseInt(character) >= 0;
    let isNextCharacterNumber = parseInt(reversedArray[i+1]) >= 0;
    
    //if character is not an integer, add it to the end of an array
    if (!isCharacterNumber){
      correctedArray.push(character);
      continue;
    }
    
    console.log("numberBefore", numberHolder);
    //others must be integers so add the to the start of a new array
    numberHolder = numberHolder.unshift(character);
    console.log("numberAfter", numberHolder);
    
    /*if one number is an integer but the next is not, 
    put the whole unreversed number back into the corrected array
    and empty the numberHolder variable*/
    
    if (!isNextCharacterNumber){
		correctedArray = correctedArray.concat(numberHolder);
      	numberHolder = [];
      	continue;
    }
  }
  
 // return correctedArray.join();
  return correctedArray;
}

console.log(solve("100*b/y"));
console.log("****End****");
