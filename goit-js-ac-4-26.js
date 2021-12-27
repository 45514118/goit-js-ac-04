// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

const getActiveUsers = (users) => {
  const activeUsers = users.filter((user) => user.isActive);
  return activeUsers;
};
