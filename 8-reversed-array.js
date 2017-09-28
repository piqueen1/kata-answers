function digitize(n) {
  const array = n.toString().split('');
  let reversed = array.reverse();
  return reversed.map(Number);
}