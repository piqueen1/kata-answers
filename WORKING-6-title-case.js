// URL: https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords = undefined) {
  const lowerTitleWords = title.toLowerCase().split(' ');
	const casedTitleArray = [];

	for (let i=0;i<lowerTitleWords.length;i++) {
		const lilCurrent = lowerTitleWords[i];
		const bigCurrent = lilCurrent.charAt(0).toUpperCase() + lilCurrent.slice(1)

  	if (minorWords === undefined | i === 0 ) {
  		casedTitleArray.push(bigCurrent);
  	} else if (minorWords.toLowerCase().split(' ').includes(lilCurrent)){
			casedTitleArray.push(lilCurrent);
		} else {
			casedTitleArray.push(bigCurrent);
		}
	}

  return casedTitleArray.join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings'
