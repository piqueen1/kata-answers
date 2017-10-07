function correctPolishLetters (string) {
  //declare key
  let key = {
	ą : 'a',
	ć : 'c',
	ę : 'e',
	ł : 'l',
	ń : 'n',
	ó : 'o',
	ś : 's',
	ź : 'z',
	ż : 'z'  	
  };

  //string to array so map can map it
  //I think String.replace might work but I don't know how
  let letterArray = string.split();

  //check each value and replace with key if necessary
  let englishArray = letterArray.map(function(letter) {
  	if (letter in key) {
  		return key[letter]
  	} 
  	return letter;
  });
  return englishArray.join();
}
