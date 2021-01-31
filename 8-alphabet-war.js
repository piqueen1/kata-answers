// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight)
{
  const values = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: -4,
    q: -3,
    d: -2,
    z: -1
   }
   let score = 0;
   let fightArray = fight.split('')

   fightArray.forEach(c => {
     if (Object.keys(values).includes(c)) {
       score += values[c]
     }
   })

   return score > 0 ? "Left side wins!" :
    score < 0 ? "Right side wins!" :
    "Let's fight again!";
}

console.log(alphabetWar("z")) //, "Right side wins!"