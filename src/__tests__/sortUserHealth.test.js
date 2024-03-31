import sortUserHealth from '../js/sortUserHealth';

test('testing function sortUserHealth', () => {
  const users = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = sortUserHealth(users);
  expect(result).toEqual(users);
});
