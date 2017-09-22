function tickets(payments) {
  const bank = {
    25: 0,
    50: 0,
  };

  for (let i = 0; i < payments.length; i++) {
    const payment = payments[i];

    if (payment === 25) {
      bank['25'] += 1;
      continue;
    }

    if (payment === 50) {
      bank['50'] += 1;
      bank['25'] -= 1;
    }

    if (payment === 100) {
      if (bank['50'] > 0) {
        bank['50'] -= 1;
        bank['25'] -= 1;
      } else {
        bank['25'] -= 3;
      }
    }

    if (bank['25'] < 0) {
      return 'NO';
    }
  }

  // Happy path!
  return 'YES';
}