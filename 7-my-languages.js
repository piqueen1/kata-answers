// https://www.codewars.com/kata/mylanguages

console.log('*** Start ***');

function myLanguages(results) {
  const languages = Object.keys(results);
  const length = languages.length;

  languages.sort();

  const sortedScores = [];

  for (let i=0; i<length; i++) {
    //get current key
    const current = [languages[i]];
    console.log(current + ' : ' + languages[current]);
    sortedScores.push({'score' : current, 'language' : languages[current]});
  }
  return sortedScores;
}

console.log('The answer is... ', myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));
console.log('*** End ***');

