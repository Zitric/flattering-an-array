const iterateArray = (arrayToFlat, flattedArray) => {
  if (arrayToFlat.length === 0) return flattedArray;

  const element = arrayToFlat.shift();
  if (typeof element === 'number') {
    flattedArray.push(element);
    iterateArray(arrayToFlat, flattedArray);
  } else if (Array.isArray(element)) {
    iterateArray([...arrayToFlat, ...element], flattedArray);
  } else {
    iterateArray(arrayToFlat, flattedArray);
  }
};

const flatArray = (arrayToFlat) => {
  if (!arrayToFlat || !Array.isArray(arrayToFlat)) return [];

  const flattedArray = [];
  iterateArray(arrayToFlat, flattedArray);
  return flattedArray.sort();
};

module.exports = flatArray;
