function solve(a){
  /*
  1) count even numbers (ignore letters)
  2) count odd numbers (ignore letters)
  3) return even - odd
  */
  let evenCounter = 0;
  let oddCounter = 0;
  const numbers = a;

  for ( let i = 0; i < numbers.length; i++) {
  	const number = numbers[i];
    
    if (typeof number !== 'number') {
      continue;
    }
    
  	if (number % 2 === 0 || number === 0) {
  		evenCounter++;
  	} else {
  		oddCounter++;
  	}
  }
	return evenCounter - oddCounter;

};