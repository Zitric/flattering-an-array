const iterateArray = (arrayToFlat, flattedArray) => {
  if (arrayToFlat.length === 0) return flattedArray;

  const element = arrayToFlat.shift();
  // if element is an array concat the array elements to the arrayToFlat, flattering a flat
  if (Array.isArray(element)) arrayToFlat = [...arrayToFlat, ...element];
  // if the element is not nule add the element to the flattedArray
  else if (element) flattedArray.push(element);

  iterateArray(arrayToFlat, flattedArray);
};

const flatArray = (arrayToFlat) => {
  if (!Array.isArray(arrayToFlat)) return [];

  const flattedArray = [];
  iterateArray([...arrayToFlat], flattedArray);
  return flattedArray;
};

module.exports = flatArray;
