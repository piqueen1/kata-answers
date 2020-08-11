// URL: https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords = undefined) {
	const lowerTitleWords = title.toLowerCase().split(' ');
  
  const casedTitle = lowerTitleWords.map( function(word, minorWords) {
		if ((typeof minorWords == "array") && (minorWords.indexOf(word) > -1)) {
			return word;
		} else {
			return word.charAt(0).toUpperCase() + word.slice(1)
		}
  } );

  return casedTitle.join(' ');
}

console.log(titleCase("james and the giant peach"))