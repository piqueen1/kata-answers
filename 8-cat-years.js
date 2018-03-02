//https://www.codewars.com/kata/cat-years-dog-years/train/javascript

console.log("****Start***")
var humanYearsCatYearsDogYears = function(humanYears) {
  let answerArray = [];
  let catYears = 0;
  let dogYears = 0;
  
  if (humanYears >=1) {
  
  }
  
  answerArray.push(humanYears);
  answerArray.push(catYears);
  answerArray.push(dogYears);
  return answerArray;
}

console.log("answer ", humanYearsCatYearsDogYears(1))
console.log("****End***")

/*Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/