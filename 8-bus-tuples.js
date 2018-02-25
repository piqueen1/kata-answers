// https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript

console.log('*****Program start*****');
var number = function(busStops){
  return busStops.reduce(function (accumulator, stop) {
    accumulator = accumulator + stop[0];
    accumulator = accumulator - stop[1];
    return accumulator;
  }, 0)
}

const answer = number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
console.log('Answer: ', answer);
console.log('******Program end******');