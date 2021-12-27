// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

const getInactiveUsers = (users) => {
  const inactiveUsers = users.filter((user) => !user.isActive);
  return inactiveUsers;
};
