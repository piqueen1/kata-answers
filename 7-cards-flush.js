// https://www.codewars.com/kata/determine-if-the-poker-hand-is-flush/train/javascript

function isFlush(cards) {
  const suit = cards[0].slice(-1);

  for (let i = 0; i < cards.length; i++) {
    let current = cards[i];
    if (current.slice(-1) !== suit) {
      return false;
    }
  }

  return true;
}