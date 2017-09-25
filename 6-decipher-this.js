function decipherThis(str) {
/*  1)split string into words
		2)split words into characters
    	a) if character is a number, push to number array
      b) glue number array into number
      c) change number into letter
      d) put that letter into 'translated' array
  	2.1) IF only one letter, push to array
    2.2) IF two letters:
    	a. convert first from number to letter
      b. push to array
      c. push 2nd unchanged to array
    3) first letter:
    	a. turn number into letter
    	b. push to 'translated' array
    4) second letter:
    	a. switch to last letter of word
      b. push to 'translated' array
    5) push middle letters straight to array
    6) last letter:
    	a. switch with last letter
      b. push to array
    7) do this with every word
    8) join array into string, return it */
  
  //1)split string into words
  let words = str.split(' ');
  
  //2)split words by number then individual letters
  for (let i = 0; i < words.length; i++){
  //split word into characters
    const word = words[i];
    const character = word.split('');
		let numberArray = [];
    let gluedNumber = 0;
    let letterFromUnicode = '';
    let translatedArray = [];
    
    //if character is a number, push to number array
    if (!Number.isNaN(character){
    	numberArray.push(character);
    };
  	//glue numberArray into number
  	gluedNumber = numberArray.join();
  	//change number into letter
  	letterFromUnicode = String.fromCharCode(gluedNumber);
		//put that letter into 'translated' array
  	translatedArray.push(letterFromUnicode);
  	//if it's a number, delete that character from word array
		//I'm trying to get it down to just letters  
  
};
  
  return translatedArray;
}; 

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
