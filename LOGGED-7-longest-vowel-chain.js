function solve(s){
 /*
 1) split string into letter array
 2) for every letter, if it matches \[aeiou]\ push to vowel array
 3) 
 */
 const originalArray = s.split('');
 const vowels = /[aeiou]/
 let longestVowelArray = [];
 let finalArray = [];
 let longestChain = [];

 for (let i = 0; i < originalArray.length; i++) {
 	const letter = originalArray[i];

 	if (letter.match(vowels)) {
 		vowelArray.push(letter);
 	}
 	//push vowel sequences into bigger array
 	finalArray.push(vowelArray);
 	//see which element of bigger array is longest
 	//make that longestChain
 	//join longestChain and return it
 }

}
