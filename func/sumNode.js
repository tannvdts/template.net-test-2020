const { SUM_NODE } = require('./constants')

module.exports = (arr) => {
  // @Validation arr param
  if (!Array.isArray(arr)) 
    throw new Error(SUM_NODE.ERRORS.PARAMS_NOT_IS_ARRAY);
  if (arr.length < SUM_NODE.ARRAY_MIN_LENGTH || arr.length > SUM_NODE.ARRAY_MAX_LENGTH) 
    throw new Error(SUM_NODE.ERRORS.ARRAY_LENGTH_INVALID);

  // Init temp variable
  let sum =0, grandparentNaturalIndex, nodeValue, grandparentValue;

  for (let i = 1; i <= arr.length; i++) {
    nodeValue = arr[i - 1];
    if (nodeValue === null) continue;

    // @Validation node value
    if (
      (nodeValue !== null && !Number.isInteger(nodeValue)) 
      || arr[i -1] < SUM_NODE.NODE_VALUE_MIN 
      || arr[i -1] > SUM_NODE.NODE_VALUE_MAX
    )
    {
      throw new Error(SUM_NODE.ERRORS.NODE_VALUE_INVALID);
    }

    grandparentNaturalIndex = Math.floor(i/4);
    if (grandparentNaturalIndex === 0) continue;
    grandparentValue = arr[grandparentNaturalIndex - 1];

    // @Validation node relation
    if (Number.isInteger(nodeValue) && grandparentValue === null) {
      throw new Error(SUM_NODE.ERRORS.NODE_RELATION_INVALID)
    }

    // Start logic sum
    if (grandparentValue %2 === 0) {
      sum += nodeValue
    }
  }
  return sum;
}
