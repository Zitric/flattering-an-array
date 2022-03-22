const flatArray = require('./flatArray');

test('If the array is a falsy value, it should return an emtpy array', () => {
  expect(flatArray([])).toEqual([]);
  expect(flatArray(undefined)).toEqual([]);
  expect(flatArray(null)).toEqual([]);
  expect(flatArray(false)).toEqual([]);
});

test('If the array is not an array, it should return an emtpy array', () => {
  expect(flatArray({ name: 'Peter' })).toEqual([]);
  expect(flatArray(5)).toEqual([]);
  expect(flatArray('hello world')).toEqual([]);
});

test('If we have nested arrays with different values, it should return a number sorted flatted array', () => {
  expect(flatArray([1, , [2, [3]], , 'hello', 4]).sort()).toEqual([
    1,
    2,
    3,
    4,
    'hello',
  ]);
  expect(flatArray([[], [], [2, [3]], , 5, 'hello', 4]).sort()).toEqual([
    2,
    3,
    4,
    5,
    'hello',
  ]);
  expect(flatArray([99, , [[2, [3]]], , 'hello', 4]).sort()).toEqual([
    2,
    3,
    4,
    99,
    'hello',
  ]);
  expect(flatArray([1, [8, 6, 3], [2, [3]], , 'hello', 4]).sort()).toEqual([
    1,
    2,
    3,
    3,
    4,
    6,
    8,
    'hello',
  ]);
});
