function blackAndWhite(arr){

  if (!Array.isArray(arr)) {
  	return "It's a fake array";
  }
  if (arr.indexOf(5) && arr.indexOf(13)) {
  	return "It's a black array";
  }
  	return "It's a white array";
}