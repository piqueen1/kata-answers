// https://www.codewars.com/kata/coloured-triangles/train/javascript

console.log('***start***');

function triangle(row) {
  const rowArray = row.split('');
  let nextRow = [];

  for (let i=0; i<rowArray.length-1; i++) {
    const current = rowArray[i];
    const next = rowArray[i+1];
    if (current === next) {
      nextRow.push(current);
    } else if (current === ) {
//HOW DO I DO A LOOKUP ON 6 COMBINATIONS?
    }
  }
   return nextRow;
}



console.log(triangle('GGG')); // 'R'
console.log('*** end ***');
