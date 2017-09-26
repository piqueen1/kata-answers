function isValid(numbers) {
  // Here we compose our functions that check to see if a number is within our numbers array.
  const isThere = createIsThere(numbers);

  if (isThere(1) && isThere(2)) {
    return false;
  }

  if (isThere(3) && isThere(4)) {
    return false;
  }

  if (isThere(5) && !isThere(6)) {
    return false;
  }
  if (isThere(6) && !isThere(5)) {
    return false;
  }

  if (isThere(7) && !isThere(8)) {
    return false;
  }
  if (isThere(8) && !isThere(7)) {
    return false;
  }

  return true;
}

function createIsThere(arr) {
  return function(number) {
    return arr.indexOf(number) !== -1;
  }
}