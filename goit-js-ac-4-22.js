// Дополни функцию getUsersWithEyeColor(users, color) так,
// чтобы она возвращала массив пользователей у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

const getUsersWithEyeColor = (users, color) => {
const usersWithEyeColor = users.filter(user => user.eyeColor === color);
return usersWithEyeColor;
};
                                             