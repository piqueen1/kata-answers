// https://www.codewars.com/kata/total-amount-of-points/train/javascript

console.log('***start***');

function points(games) {
  total = 0;

  for (let i=0; i<games.length; i++) {
    const current = games[i];
    const currentArray = current.split('');

    let X = parseInt(currentArray[0]);
    let Y = parseInt(currentArray[2]);

   if (X > Y) {
    total = total + 3;
   } else if (X === Y) {
    total = total + 1;
   }
  }

  return total;
}

console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])); // 10
console.log('*** end ***');

/*
Favorite solution, with reduce:
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }
*/