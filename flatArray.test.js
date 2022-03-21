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
