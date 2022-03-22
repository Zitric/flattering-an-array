const iterateArray = (arrayToFlat, flattedArray) => {
  if (arrayToFlat.length === 0) return flattedArray;

  const element = arrayToFlat.shift();
  if (typeof element === 'number') flattedArray.push(element);
  else if (Array.isArray(element)) arrayToFlat = [...arrayToFlat, ...element];
  iterateArray(arrayToFlat, flattedArray);
};

const flatArray = (arrayToFlat) => {
  if (!arrayToFlat || !Array.isArray(arrayToFlat)) return [];

  const flattedArray = [];
  iterateArray([...arrayToFlat], flattedArray);
  return flattedArray.sort();
};

module.exports = flatArray;
