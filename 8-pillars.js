// https://www.codewars.com/kata/pillars/train/javascript

console.log('***start***');

function pillars(num_pill, dist, width) {
  if (num_pill <= 1) {
    return 0;
  }

  const pillarDist = (num_pill - 2) * width;
  const spaceDist = (num_pill - 1) * dist;

  return pillarDist + 100 * spaceDist;
}

console.log(pillars(1, 10, 10)); //  0
console.log('*** end ***');
