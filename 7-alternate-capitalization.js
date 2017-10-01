function capitalize(s){
  /*
  1) turn string to array
  2) map array so every even index is capitalized
  3) join that string and push it to final array
  4) map array so every odd index is capitalized
  5) join that string and push it to final array
  */

  const stringArray = s.split('');
  let finalArray = [];

  const evensCapitalized = stringArray.map(function(letter, index) {
  	if (index === 0 || index % 2 === 0) {
  		return letter.toUpperCase();
  	} else {
  		return letter;
  	};
  });

  finalArray.push(evensCapitalized.join(''));

  const oddsCapitalized = stringArray.map(function(letter, index) {
  	if (index % 2 !== 0) {
  		return letter.toUpperCase();
  	} else {
  		return letter;
  	};
  });

  finalArray.push(oddsCapitalized.join(''));

  return finalArray;
};