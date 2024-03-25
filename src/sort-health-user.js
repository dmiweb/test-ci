export default function sortUserHealth(users) {
  const sortUsers = users.sort((x, y) => y.health - x.health);

  return sortUsers;
}
