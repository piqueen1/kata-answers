// URL: https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords = undefined) {
	const lowerTitleWords = title.toLowerCase().split(' ');
  if (minorWords !== undefined) {
    const minorArray = minorWords.split(' ');
  }

  console.log(minorArray)

  const casedTitle = lowerTitleWords.map( function(word) {
		if (minorArray && minorArray.includes(word)) {
			return word;
		} else {
			return word[0].toUpperCase()
		}
  } );

	return casedTitle
}

console.log(titleCase("james and the giant peach"))

NEXT: It can't see minor array, and it doesn't successfully capitalize the first letter anyway