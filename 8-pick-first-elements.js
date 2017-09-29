function first(arr, n) {
  let newArray =  []; 

  if (n === undefined) {
  	newArray.push(arr[0]); 
  }

  for (let i = 0; i < n && i < arr.length; i++){
  	newArray.push(arr[i]);
  }
  return newArray;
}