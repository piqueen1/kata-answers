// https://www.codewars.com/kata/seeing-shows-at-the-edinburgh-fringe/train/javascript

console.log('***start***');

function chooseShows(showList) {
  let timeArray = [];
  let nameList = [];
  let totalCost = 0;
  let firstShow;

  if (showList === []) {
    nameList = 'No shows to see!';
    return [nameList, 0];
  }

  for (let i=0; i<showList.length; i++) {
    timeArray.push(showList[i].time);
  }

  let minTime = Math.min(...timeArray);

  for (let i=0; i<showList.length; i++) {
    if (showList[i].time === minTime) {
      nameList.push(showList[i].name);
      totalCost = totalCost + showList[i].price;
      firstShow = showList[i];
    }
  }

  let earliestStart = firstShow.time + firstShow['length'] + .5;

  for (let i=0; i<showList.length; i++) {
    if (showList[i].time >= earliestStart) {
      nameList.push(showList[i].name);
      totalCost = totalCost + showList[i].price;
    }
  }

  return [nameList, totalCost];
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