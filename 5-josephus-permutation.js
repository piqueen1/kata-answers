// https://www.codewars.com/kata/5550d638a99ddb113e0000a2
// https://en.wikipedia.org/wiki/Josephus_problem

function josephus(items,k){
  if (items.length % 2 === 0) {

    for (let i=1;i<items.length;i++) {
      //  if (i is a multiple of k, if k%i === 0) {
        if (k%i == 0) // CONTINUE HERE
      //    slice out that index's value
      //    glue that value onto the end of the result array
      //  if (i = items.length - 1) {
      //    i = 0
      //   }
    }

  } else {

  }

  return items.pop;
}

console.log(josephus([1,2,3,4],2))