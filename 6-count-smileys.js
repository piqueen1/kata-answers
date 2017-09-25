//return the total number of smiling faces in the array
function countSmileys(arr) {
  /*A. if it's an empty array, return 0
    B. break array into strings
    C. for each string, 
      1)break it into an array
      2)see if the first character is qualifying eyes
      3)see if second character is good nose or mouth
      4)if there's a 3rd character see if it's a good mouth
    D. if it passes all tests, increment smiley counter ++ */
  
  //declare counter and qualifying values for smiley parts
  let counter = 0;
  const goodEyes = /[:;]/;
  const goodNoseMouth = /[-~)D]/;
  const goodMouth = /[)D]/;
  
  //break array into strings
  const strings = arr.toString().split(',');
  
  //if array is empty return 0
  if(!arr) {
    return 0;
  };
  
  //go into each string and divide it into an array
  for (let i = 0; i < strings.length; i++) {
    const string = strings[i];
    const characters = string.split('');
    let character = characters[i];
 
  //check each sub array and increment counter if it qualifies
    if(character.match(goodEyes)
       && character.match(goodNoseMouth)
       && characters.match(goodMouth) || !characters[2]) {
      counter++;
    };
  };
  return counter;  
}

countSmileys([':)', ';(', ';}', ':-D']);
