// https://www.codewars.com/kata/simple-fun-number-74-growing-plant

console.log('***start***');

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let days = 0;

  if (desiredHeight < upSpeed) { return 1 };

  while(height < desiredHeight){
    height = height + upSpeed - downSpeed;
    days += 1;
  }

  return days;
}

console.log(growingPlant(100, 10, 910)); // 10
console.log('*** end ***');
