// function decipherThis(str) {
// /*  1)split string into words
// 		2)split words into characters
//     	a) if character is a number, push to number array
//       b) glue number array into number
//       c) change number into letter
//       d) put that letter into 'translated' array
//   	2.1) IF only one letter, push to array
//     2.2) IF two letters:
//     	a. convert first from number to letter
//       b. push to array
//       c. push 2nd unchanged to array
//     3) first letter:
//     	a. turn number into letter
//     	b. push to 'translated' array
//     4) second letter:
//     	a. switch to last letter of word
//       b. push to 'translated' array
//     5) push middle letters straight to array
//     6) last letter:
//     	a. switch with last letter
//       b. push to array
//     7) do this with every word
//     8) join array into string, return it */
  
//   //1)split string into words
//   let words = str.split(' ');
  
//   //2)split words by number then individual letters
//   for (let i = 0; i < words.length; i++){
//   //split word into characters
//     const word = words[i];
//     const characters = word.split('');
// 		let numberArray = [];
//     let gluedNumber = 0;
//     let letterFromUnicode = '';
//     let translatedWordsArray = [];

//     //if only one letter, push to translated word array
//     if (word.length === 1) {
//       translatedWordsArray.push(word);
//     }

//     for (let j = 0; j < word.length; j++) {
//       //if character is a number, push to number array
//       if (typeof character === 'number') {
//       	numberArray.push(character);

//       //delete it from the single word array
//         word.shift();
//       };

//     	//glue numberArray into number
//     	gluedNumber = numberArray.join();
//     	//change number into letter
//     	letterFromUnicode = String.fromCharCode(gluedNumber);
//   		//put that letter back at the start of the single word array
//     	word.unshift(letterFromUnicode);
      
//       //switch 2nd letter with last letter
//       //but this replaces the second letter before we put it at the end
//       characters[1] === characters[characters.length-1];

//     }
// };
  
//   return translatedArray;
// }; 


function decipherThis(str) {
  console.log(str);
  const phraseArray = str.split(' ');
  const decipheredArray = phraseArray.map((word) => {
    const characterArray = word.split('');
    let newOrder = [];
    let numberGluer = [];

    for (let i=0;i<characterArray.length;i++) {
      let character = characterArray[i];
      
      if (/^\d+$/.test(character)) {
        numberGluer.push(character);
        console.log(`numberGluer is ${numberGluer} for ${character}`);
      } else {
        newOrder.push(character);
        console.log(`newOrder is ${newOrder} for ${character}`);
      }
    }
    return newOrder;
  });
  return decipheredArray;
}

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
