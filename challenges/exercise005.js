export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (let i = 0; i < nums.length - 1; i++) {

    if (nums[i] === n) {
      return nums[i + 1];
    }
  }
  return null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const obj =
  {
    1: 0,
    0: 0
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      obj[1] += 1

    } else if (str[i] === '0') {
      obj[0] += 1
    }
  }
  return obj
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  return parseFloat(n.toString().split('').reverse().join(''))
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.toString().split(',').map(Number).reduce((a, b) => (a + b), 0)
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length > 1) {
    return [arr[arr.length-1], ...arr.slice(1, arr.length-1), arr[0]];
  }
  return arr; 
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (let k in haystack) {
    if (haystack[k].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
      } 
    }
    return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const frequencies = {};
 
  const char = str.toLowerCase().split(' ');

  for (let i = 0; i < char.length; i++) {

    let newValue = char[i].replace(/[^a-zA-Z0-9]/g, "");
    
    if (frequencies[newValue] === undefined) {

      frequencies[newValue] = 1
    } else {
      frequencies[newValue] += 1
    }
  }
  return frequencies;
};
