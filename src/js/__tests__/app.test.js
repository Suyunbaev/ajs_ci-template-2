import getHealth from '../app';

test('проверка индикации жизни при здоровье 50', () => {
  const gamer = { name: 'Маг', health: 50 };
  const received = getHealth(gamer);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 15', () => {
  const gamer = { name: 'Маг', health: 15 };
  const received = getHealth(gamer);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 90', () => {
  const gamer = { name: 'Маг', health: 90 };
  const received = getHealth(gamer);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 0', () => {
  const gamer = { name: 'Маг', health: 0 };
  const received = getHealth(gamer);
  const expected = 'critical';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 49', () => {
  const gamer = { name: 'Маг', health: 49 };
  const received = getHealth(gamer);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 14', () => {
  const gamer = { name: 'Маг', health: 14 };
  const received = getHealth(gamer);
  const expected = 'critical';
  expect(received).toBe(expected);
});
