// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};
