function blackOrWhiteKey(keyPressCount) {
    /* 
    1. count modulus 88 = how many numbers up from root A
    2. take that modulus 12
    4. find color of that number (key)
    */

  const keyColor = {
    1 : 'white',
    2 : 'black',
    3 : 'white',
    4 : 'white',
    5 : 'black',
    6 : 'white',
    7 : 'black',
    8 : 'white',
    9 : 'white',
    10 : 'black',
    11 : 'white',
    12 : 'black',
  };
  
  let upFromRoot = 0;
  let placeOnScale = 0;
  
  // But if = 0, should be white (4)
  if (keyPressCount % 88 === 0){
    upFromRoot = 4;  
  } else {
    upFromRoot = keyPressCount % 88;
  };
  
  // But if = 0, should be black (12)
  if (upFromRoot % 12 === 0) {
    placeOnScale = 12;
  } else {
    placeOnScale = upFromRoot % 12;
  };
  
  return keyColor[placeOnScale];
}