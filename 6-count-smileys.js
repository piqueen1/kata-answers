//return the total number of smiling faces in the array
function countSmileys(faces) {
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
  const goodNose = /[-~]/;
  const goodMouth = /[)D]/;
    
  //if array is empty return 0
  if(!faces){
    return 0;
  }
  
  if (faces.length <= 0) {
    return 0;
  }
  
  //go into each string and divide it into an array
  for (let i = 0; i < faces.length; i++) {
    const face = faces[i];
    const characters = face.split('');
    const eyes = characters[0];


  //check each face with 3 characters    
    if (characters.length > 3) {
      continue;
    }

    if (characters.length === 3) {
      const nose = characters[1];
      const mouth = characters[2];
      if (!eyes.match(goodEyes)) {
        continue;
      }
      if (!nose.match(goodNose)) {
        continue;
      }
      if (!mouth.match(goodMouth)) {
        continue;    
      }
    }
    //check if there are only 2 characters    
    if (characters.length === 2) {
      const mouth = characters[1];
      if (!eyes.match(goodEyes)) {
        continue;
      }
      if (!mouth.match(goodMouth)) {
        continue;    
      }
    } 
    counter++
  }
  return counter;  
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));

