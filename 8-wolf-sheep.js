// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
  let wolf = 0
  
  for (let i=0;i<queue.length;i++) {
    if (queue[i]==="wolf")
      wolf = queue.length - i
  }
  
  let sheep = wolf - 1

  return sheep === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])) //, "Oi! Sheep number 2! You are about to be eaten by a wolf!");)