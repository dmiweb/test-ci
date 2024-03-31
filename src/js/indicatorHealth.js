export default function indicatorHealth(user) {
  if (user.health > 50) {
    return 'healthy';
  }
  if (user.health <= 50 && user.health >= 15) {
    return 'wounded';
  }
  if (user.health < 15 && user.health > 0) {
    return 'critical';
  }
}
