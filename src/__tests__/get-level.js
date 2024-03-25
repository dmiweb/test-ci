import getLevel from '../get-level';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel once', () => {
  fetchData.mockReturnValue(new Error('Mock this!'));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('testing function getLevel', () => {
  fetchData.mockReturnValue(new Error('Mock this!'));
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});

test('testing function getLevel', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 12 });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 12');
});
