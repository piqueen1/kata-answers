// https://www.codewars.com/kata/reverse-letters-in-sentence
console.log('***START***');
function reverser(sentence) {
  let reversedArray = sentence.split("").reverse().join("");
  let wordArray = reversedArray.split(" ").reverse().join(" ");
  return wordArray;
}
console.log("Answer: ", reverser("Hi mom"));
console.log('***END***');