// https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

function moveVowel(input) {
	//string to array
	const unsorted = input.split('');
	//declare vowel regex
	const vowels = 'aeiouAEIOU';
	//declare final array
	let finalArray = [];
	//declare final string
	let finalString = '';

	//filter for only consonants
	finalArray = unsorted.filter(function(letter) {
		return !vowels.includes(letter);
	})

	//iterate and push vowels
	for (let i = 0; i < unsorted.length; i++) {
		const letter = unsorted[i];

		if (vowels.includes(letter)) {
			finalArray.push(letter);
		}	
	}

	finalString = finalArray.join('');
	return finalString;
}

console.log(moveVowel("day")) //,"dya")
