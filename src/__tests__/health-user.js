import indicatorHealth from '../health-user';

test.each([
  ['Маг', {health: 90}, 'healthy'],
  ['Маг', {health: 30}, 'wounded'],
  ['Маг', {health: 10}, 'critical']
])(
  ('testing indicatorHealth for %s user with %i health'),
  (_, health, expected) => {
    const result = indicatorHealth(health);
    
    expect(result).toBe(expected);
  }
);