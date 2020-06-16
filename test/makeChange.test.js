import makeChange from './makeChange';

test('拿200元买120块商品，预期会找零80元~', () => {
  const money = 200;
  const price = 120;
  expect(makeChange(money, price)).toBe(80);
});
