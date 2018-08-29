https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript

console.log('***start***');

function feast(beast, dish) {
  return beast.slice(0,1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1) ? true : false;
}

console.log(feast("great blue heron", "garlic naan"));
console.log('*** end ***');