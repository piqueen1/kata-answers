function titleCase(title, minorWords) {
  /*
  	1) make every letter in title lowercase
  	2) split title into word strings
  	3) split minorWords into word strings
	4) for each word,
		a. split into letters
		b. first word, 
			1. make the first letter capital, push to new array
			2. push all the other letters
			3. rejoin into string, push to final array
		c. for every following word,
			1. check if it's a minor word (case insensitive)
			2. if so, push the whole thing into final array
			3. if not, split into letters
			4. make the first letter capital, push
			5. push all the other letters
			6. rejoin and push to final array
		d. return final array
  */
	const lowerTitle = title.toLowerCase();
	const titleWords = lowerTitle.split('');
	const lowerExceptions = minorwords.toLowerCase();
	const exceptionWords = lowerExceptions.split('');
	let finalTitleArray = [];
	let finalTitle = '';

	//check each word
	for (let i = 0; i < titleWords.length; i++) {
		const titleWord = titleWords[i];
		const letters = titleWord.split();
		let finalLetterArray = [];
		let finalWord = '';

		//for first word and other non-exceptions
		for (titleWords[0] || !exceptionWords.includes(titleWord)) {		
			//for every letter
			for (let j = 0; j < letters.length; j++)

			letter[0].toUpperCase();
			finalLetterArray.push(letter[i]);
			finalWord = finalLetterArray.join('');
			finalTitleArray.push(finalWord);
		}

		//for the rest (which are all exception words)
		finalTitleArray.push(titleWord);
	}
	finalTitle = finalTitleArray.join(' ');
	return finalTitle;
}
