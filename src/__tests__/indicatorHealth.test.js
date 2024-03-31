import indicatorHealth from '../js/indicatorHealth';

test.each([
  ['Маг', { health: 90 }, 'healthy'],
  ['Маг', { health: 30 }, 'wounded'],
  ['Маг', { health: 10 }, 'critical']
])(
  ('testing indicatorHealth for %s user with %i health'),
  (_, health, expected) => {
    const result = indicatorHealth(health);

    expect(result).toBe(expected);
  },
);

test('testing function getLevel', () => {
  const user = {name: 'Маг', health: 0}

  const result = indicatorHealth(user);
  
  expect(result).not.toBe('critical');
});