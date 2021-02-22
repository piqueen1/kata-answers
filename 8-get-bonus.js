// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  const amount = bonus ? salary*10 : salary
  
  return `£${amount}`
}

  console.log(bonusTime(10000, true)) // '£100000'