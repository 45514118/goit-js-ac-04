// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
// почта которого(свойство email) совпадает со значением параметра email.

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
