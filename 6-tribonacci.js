function tribonacci(signature,n){
  /* 1. sum up signature
     2. push it to the end of the new array
      -- loop it --
     3. add up previous 3 indices
     4. push it to the end of the array
     5. continue until it pushes i < n */
  let sequence = signature;
  let nextValue = 0;
  
  if (n === 0){
    sequence = [];
  };
  
  if (n === 1){
    sequence = [signature[1]];
  }
  
  if (n === 2) {
    sequence = [signature [2]];
  }
  
  for (let i = 2; i < n - 1; i++){
    let current = sequence[i];
    nextValue = current + sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue)
  };
  
  return sequence;
}