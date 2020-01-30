// URL: https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords = undefined) {
	const lowerTitleWords = title.toLowerCase().split(' ');
  
  const casedTitle = lowerTitleWords.map( function(word, minorWords = undefined) {
		if (minorWords && minorWords.includes(word)) {
			return word;
		} else {
			return word[0].toUpperCase()
		}
  } );
  console.log(casedTitle)
  return casedTitle
}

console.log(titleCase("james and the giant peach"))