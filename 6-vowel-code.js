// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

function encode(string) {
  const characterArray = string.split('');
  const code = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5',
  }
  const newArray = characterArray.map((character) => {
    if (character in code) {
      return code[character];
    } else {
      return character;
    }
  });

  return newArray.join('');
}

function decode(string) {
  const characterArray = string.split('');
  const code = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u',
  }
  const newArray = characterArray.map((character) => {
    if (character in code) {
      return code[character];
    } else {
      return character;
    }
  });

  return newArray.join('');
}


console.log(encode('hello')); // 'h2ll4'
