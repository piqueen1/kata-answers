// https://www.codewars.com/kata/growth-of-a-population

console.log('****START****');

function nb_year(p0, percent, aug, p) {
  let numOfYears = 1;
  const decimalPercent = percent === null ? null : percent/100;
  let currentPop = p0 + p0 * decimalPercent + aug;

  if (p0 > p) return 0;

  while (currentPop < p) {
    numOfYears++;
    currentPop = new_pop(currentPop, decimalPercent, aug);
  };

  return numOfYears;
}

function new_pop(currentPop, decimalPercent, aug) {
  return currentPop + currentPop * decimalPercent + aug;
}

console.log('Answer: ', nb_year(1500000, 2.5, 10000, 2000000)); // 10
console.log('****END****');

// READY TO TEST ON CODEWARS!!