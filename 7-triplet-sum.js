//Maximum Triplet Sum
function maxTriSum(numbers) {
  console.log('input', numbers);
  let unique = [...new Set(numbers)];
  let descending = unique.sort(function (a, b) { return b - a });

  return descending[0] + descending[1] + descending[2];
}