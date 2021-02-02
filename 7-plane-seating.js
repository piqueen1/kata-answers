//https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript

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
    let side = ""
    if (side.keys.includes(letter)) {
      side = letterSide.letter
    } else {
      side = "No Seat!!"
    }
  }

  function findSection(num) {
    let section = ""
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

  const assignedArray = a.split()''
  let assignedSide = a.split().slice(-1)
  let assignedSection = a

  console.log(assignedSide, assignedSection)
}

planeSeat("27b")