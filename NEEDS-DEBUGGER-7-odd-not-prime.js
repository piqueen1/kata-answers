  // https://www.codewars.com/kata/odd-not-prime/train/javascript

  console.log('****START****');

  function oddNotPrime(number) {
    let oddNotPrimeCounter = 0;

    for (let i = 0; i <= number; i++) {
      if (i === 1) {
        oddNotPrimeCounter++;
        console.log('counter: ', oddNotPrimeCounter);
        continue;
      };
      if (i % 2 === 1) {
        oddNotPrimeCounter++;
      };
      if (isPrime(i)) {
        oddNotPrimeCounter--;
      };
    };

    return oddNotPrimeCounter;
  };

  function isPrime(number) {
    for (var i = 2; i < number; i++)
      if (number % i === 0) return false;
    return number !== 1;
  }

  console.log('Answer: ', oddNotPrime(5)); // 2
  console.log('****END****');

//THIS IS WRONG; The answer is consistently one too small
