https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
  return array1.map((letter1) => {
    let score = 0;

    for (let i=0;i<array1;i++) {
      const letter2 = array2[i];

      switch (letter2) {
        case (letter1 === letter2) {
          score += 4;
          break;
          };

          case(letter1 !== letter2){
            score -= 1;
            break;
          }

          default {
            break;
          }
        }
      }

      return score;
    }
  });
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //, 6);)