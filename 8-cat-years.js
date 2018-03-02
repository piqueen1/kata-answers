console.log("****Start***")
var humanYearsCatYearsDogYears = function(humanYears) {
  let answerArray = [];
  let catYears = 0;
  let dogYears = 0;
  
  if (humanYears >=1) {
  	catYears = 15;
    dogYears = 15;
  }
  
  if (humanYears >=2) {
  	catYears = 24;
    dogYears = 24;
  }
  
  if (humanYears >=3) {
  	catYears = 24+4*(humanYears-2);
    dogYears = 24+5*(humanYears-2);
  }
  
  answerArray.push(humanYears);
  answerArray.push(catYears);
  answerArray.push(dogYears);
  return answerArray;
}

console.log("answer ", humanYearsCatYearsDogYears(10))
console.log("****End***")