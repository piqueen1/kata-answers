function sentencify(words) {
  /*
  1) capitalize first letter
  2) add . to end
  3) join ' '
  */

  //capitalize first letter
  const newFirst = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  //replace original first word with capitalized version
  words[0] = newFirst;

  //add . to end
  words[words.length-1] += '.';

  //join
  return words.join(' ');
}