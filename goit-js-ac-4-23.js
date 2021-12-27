// Дополни функцию getUsersWithAge(users, minAge, maxAge) так,
// чтобы она возвращала массив пользователей, возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

const getUsersWithAge = (users, minAge, maxAge) => {
const usersWithAge = users.filter(user => user.age > minAge && user.age < maxAge);
return usersWithAge;
};