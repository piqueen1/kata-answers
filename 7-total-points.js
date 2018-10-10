// https://www.codewars.com/kata/total-amount-of-points/train/javascript

console.log('***start***');

function points(games) {
  total = 0;

  for (let i=0; i<games.length; i++) {
    const current = pareInt(games[i]);

    switch (current) {

    }
  }

  return total;
}

console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])); // 10
console.log('*** end ***');
