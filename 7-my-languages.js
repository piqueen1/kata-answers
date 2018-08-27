// https://www.codewars.com/kata/mylanguages

// MY ANSWER DOESN'T WORK.  ACTUAL ANSWER:
// function myLanguages(results) {
//   return Object.keys(results).filter(r => results[r] > 59).sort((a, b) => results[b] - results[a]);
// }

console.log('*** Start ***');

function myLanguages(results) {
  let resultsArray = Object.entries(results).reduce((filteredArray, current) => {
    return filteredArray + current;
  }, []);

  return resultsArray;
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
