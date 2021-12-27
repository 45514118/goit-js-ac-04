// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных.
// Обязательно используй метод filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const evenNumbers = numbers.filter((value) => value % 2 === 0);
const oddNumbers = numbers.filter((value) => value % 2 !== 0);
