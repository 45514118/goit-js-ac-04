// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из массива books,
// а в переменной uniqueGenres массив уникальных жанров - без повторений.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);