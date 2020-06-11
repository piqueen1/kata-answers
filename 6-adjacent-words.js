// https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript

function countAdjacentPairs(searchString) {
  if (searchString.length === 0) return 0;

  const searchArray = searchString.toLowerCase().split(' ');

  let pairs = 0;
  
  for (let i=0; i<searchArray.length; i++) {
    if (searchArray[i-1] && (searchArray[i-1] === searchArray[i])) {
      if ((searchArray[i-2] && (searchArray[i-2] === searchArray[i]))) {continue} else { pairs += 1 };
    } else {continue};
  }

  return pairs;
}

console.log(countAdjacentPairs('orange Orange kiwi pineapple apple')) // 1