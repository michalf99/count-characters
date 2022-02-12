const charCount = str => {
  const charQuantity = {};
  str
    .toLowerCase()
    .replace(/\s/g, '')
    .split('')
    .sort()
    .forEach(char => {
      charQuantity[char] ? charQuantity[char]++ : (charQuantity[char] = 1);
    });

  return charQuantity;
};
