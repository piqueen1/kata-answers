//https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript
let side = ""
let section = ""

function planeSeat(a){
  const letterSide = {
    A: "Left",
    B: "Left",
    C: "Left",
    D: "Middle",
    E: "Middle",
    F: "Middle",
    G: "Right",
    H: "Right",
    K: "Right",
  }

  function findSide(letter) {
    if (Object.keys(letterSide).includes(letter)) {
      side = letterSide[letter]
    } else {
      side = "No Seat!!"
    }
  }

  function findSection(num) {
    if (num >= 1 && num <= 20) {
      section = "Front"
    } else if (num >= 21 && num <= 40) {
      section = "Middle"
    } else if (num >= 41 && num <= 60) {
      section = "Back"
    } else {
      section = "No Seat!!"
    }
  }

  let assignedSide = a.slice(-1)
  let assignedSection = parseInt(a.substring(0, a.length - 1));

  findSide(assignedSide)
  findSection(assignedSection)

  if (section === "No Seat!!" || side === "No Seat!!") {
    return "No Seat!!"
  } else {
    return `${section}-${side}`
  }
}

console.log(planeSeat("27B"))