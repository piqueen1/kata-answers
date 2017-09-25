function tribonacci(signature,n){
  /* 1. sum up signature
  	 2. push it to the end of the new array
     3. add up previous 3 indices
     4. push it to the end of the array
     5. continue until it pushes i < n */
  let last3 = signature;
  let nextValue = 0;
  
  
  nextValue = last3.reduce(function(sum,value) {
  	return sum + value;
  }, 0);
  
  sequence.push(nextValue);
  
  return sequence;
}

tribonacci([1,1,1],10);