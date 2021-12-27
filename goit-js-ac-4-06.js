// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach(function (item, i) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  });
  return filteredNumbers;
}
