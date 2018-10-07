// https://www.codewars.com/kata/seeing-shows-at-the-edinburgh-fringe/train/javascript

console.log('***start***');

function chooseShows(showList) {
  let timeArray = [];
  let nameList = [];
  let totalCost = 0;
  let firstShow;

  // Empty Input Array response
  if (showList && showList.length === 0) {
    nameList = ['No shows to see!'];
    return [nameList, 0];
  }

  // Make 
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
    console.log(showList[i].time);
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

/* Successful code:
function chooseShows(shows) {
    var s, x, p = 0, r = [], f = s => s.time >= x;
    shows.sort((a,b) => (a.time-b.time) || (a.price-b.price));
    while (shows.length) {
        s = shows[0];
        x = s.time+s.length+0.5;
        shows = shows.filter(f);
        r.push(s.name);
        p += s.price;
    }
    if (!r.length) r.push('No shows to see!');
    return [r,p];
}
*/
