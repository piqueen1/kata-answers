// https://www.codewars.com/kata/6022c97dac16b0001c0e7ccc/train/javascript

function calculateWinners(snapshot, penguins) {
  // 1. split snapshot into lanes
  // 2. get lane length
  // 3. Make a class of penguin
  // 4. Each penguin has:
  //    0. a name
  //    0.5 a lane snapshot
  //    a. number where it already is in lane
  //    b. number of waves remaining
  //    c. number of flat water remaining
  //    d. amount of units to finish line
  let lanes = snapshot.split('\n')
  let laneLength = lanes[0].length
  let penguinObjects = []

  for (let i=0; i<penguins.length; i++) {
    let penguin = {}
    penguin.name = penguins[i]
    penguin.lane = lanes[i]
    penguin.laneArray = lanes[i].split('')
    penguin.place = penguin.lane.search(/[pP]/)
    penguin.remaining = laneLength - penguin.place

    penguin.waves = penguin.laneArray.reduce(function(a, e, i) {
      if (e === '~')
          a.push(i);
      return a;
    }, []);

    for (let i=0;i<penguin.waves.length;i++) {
      if (penguin.waves[i] > penguin.place) {
        penguin.remaining += 1
      }
    }

    penguinObjects.push(penguin)
  }
  
  const sortedPenguins = penguinObjects.sort((a,b) => {
    return (a.remaining > b.remaining) ? 1 : -1
  })

  return `GOLD: ${sortedPenguins[0].name}, SILVER: ${sortedPenguins[1].name}, BRONZE: ${sortedPenguins[2].name}`
};

const snapshot = `|----p---~---------|
|----p---~~--------|
|----p---~~~-------|`;

const penguins = ["Derek", "Francis", "Bob"];

console.log(calculateWinners(snapshot, penguins)) // "GOLD: Derek, SILVER: Francis, BRONZE: Bob";

// The rules...

// Assume all penguins swim at the same speed.
// Waves (~) take twice as long to swim through as smooth water (-).
// Penguins (p or P) are racing from left to right.
// There can be any number of lanes, and the race can be any length.
// All Lanes in a single race will be the same length.
// Penguin names are in the same order as the lanes.
// Return a string in this format: "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
// There will always be an equal amount of penguins and lanes.
// There will always be a top three (no draws).