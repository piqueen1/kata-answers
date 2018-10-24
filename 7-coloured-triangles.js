// https://www.codewars.com/kata/coloured-triangles/train/javascript

console.log('***start***');

function triangle(row) {
  if (typeof row !== 'string' && row.length) {
    return;
  }

  let nextRow = row.split('');

  while (nextRow.length !== 1) {
    nextRow = deriveRow(nextRow);
  }

  return nextRow[0];
}

function deriveRow(rowArray) {
  let nextRow = [];

  for (let i = 0; i < rowArray.length - 1; i++) {
    const current = rowArray[i];
    const next = rowArray[i + 1];

    if (current === next) {
      nextRow.push(current);
      continue;
    } else if (current === 'B' && next === 'G') {
      nextRow.push('R');
      continue;
    } else if (current === 'B' && next === 'R') {
      nextRow.push('G');
      continue;
    } else if (current === 'G' && next === 'B') {
      nextRow.push('R');
      continue;
    } else if (current === 'G' && next === 'R') {
      nextRow.push('B');
      continue;
    } else if (current === 'R' && next === 'G') {
      nextRow.push('B');
      continue;
    } else if (current === 'R' && next === 'B') {
      nextRow.push('G');
      continue;
    } else {
      return 'Sorry, input problem';
    }

    console.log(nextRow.length);
    console.log(nextRow);
  }
  return nextRow;

}



console.log(triangle('RBRGBRB')); // 'G'
console.log('*** end ***');
