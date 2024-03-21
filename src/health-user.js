export default function indicatorHealth(user) {
  if (user.health > 50) {
    return 'healthy';
  }
  if (user.health <= 50 && user.health >= 15) {
    return 'wounded';
  }
  if (user.health < 15) {
    return 'critical';
  }
}

// const key = 'health';
// const sortedUsers = users.sort((user1, user2) => user1[key] < user2[key] ? 1 : -1);