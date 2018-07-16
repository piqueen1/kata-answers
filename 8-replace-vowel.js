//https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence/train/javascript

console.log('***START***');
function replace(s) {

  return s.replace(/[aeiouAEIOU]/g, '!');

}
console.log("Answer: ", replace("Hi!")) // "H!!");
console.log('***END***');