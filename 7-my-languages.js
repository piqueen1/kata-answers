// https://www.codewars.com/kata/mylanguages

console.log('*** Start ***');

function myLanguages(results) {
  let languageKey = [];
  for (let key in results) {
    languageKey[results[key]] = key;
  }

  return languageKey;
  // const qualifyingLanguages = Object.keys(results).filter(key => results[key] >= 60);
  // let orderedArray = [];

  // for (let i=0; i<qualifyingLanguages.length; i++) {
  //   const currentLanguage= qualifyingLanguages[i];
  //   const currentScore = results.currentLanguage;

  //   //Make array of key:value where key is score and value is language
  //   orderedArray.push({ currentScore : currentLanguage });

  //   //Order that array by score
  //   //Pull off language values into an array preserving the order
  // }

  // return orderedArray;
}

console.log('The answer is... ', myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));
console.log('*** End ***');
