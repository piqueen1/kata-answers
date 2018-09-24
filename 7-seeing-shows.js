// https://www.codewars.com/kata/seeing-shows-at-the-edinburgh-fringe/train/javascript

console.log('***start***');

function chooseShows(showList) {
  let timeArray = [];

  for (let i=0; i<showList.length; i++) {
    timeArray.push(showList[i].time);
  }

  let min = Math.min(timeArray);
  console.log(min);

  return min;
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