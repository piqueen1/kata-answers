function capitalize(s,arr){
  /*
  1. split string into array
  2. filter through if arr includes that index then toUpperCase
  3. join the new array back into a string
  */
  const letterArray = s.split('');
  const newArray = [];

  //let filtered = letterArray.filter(function(letter){
  //	return IF INDEX IS IN ARR PUT IT IN UPPERCASE
  //});

  for (let i = 0; i < letterArray.length; i++) {
  	const letter = letterArray[i];
  	let bigLetter = '';

  	if (arr.includes(i)) {
  		bigLetter = letter.toUpperCase();

  		newArray.push(bigLetter);
  	} else {
  		newArray.push(letter);
  	}
  }
  return newArray.join('');

};