// https://www.codewars.com/kata/seeing-shows-at-the-edinburgh-fringe/train/javascript

console.log('***start***');

function chooseShows(showList) {
  return showList[0].name;
}

console.log(chooseShows([
  {
    name: "Little Death Club",
    time: 8,
    length: 2,
    price: 10,
  },
  {
    name: "Courtney Act",
    time: 6,
    length: 1,
    price: 10,
  },
  {
    name: "Reversible",
    time: 7,
    length: 1,
    price: 12,
  }
])); // [['Courtney Act', 'Little Death Club'], 20]
console.log('*** end ***');