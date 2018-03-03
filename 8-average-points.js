//https://www.codewars.com/kata/how-good-are-you-really/train/javascript

console.log("****Start****");
function betterThanAverage(classPoints, yourPoints) {
  const classTotal = classPoints.reduce(function (a, b) {
    return a + b;
  }, 0) + yourPoints;
  const numStudents = classPoints.length + 1;
  const classAverage = classTotal / numStudents;
  
  if (yourPoints > classAverage) {
    return true;
  } else {
    return false;
  }
}
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
console.log("****End****");