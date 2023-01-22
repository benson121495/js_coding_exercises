export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map(i => i * i);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newWords = words[0];

  for (let i = 1; i < words.length; i++) {
    newWords += words[i][0].toUpperCase() + words[i].slice(1);
  }

  return newWords;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count += people[i].subjects.length;
  }
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (let i = 0; i < menu.length; i++)
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let duplicateNumber = [];

  for (let i = 0; i < arr1.length; i++) {
    let item1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      
      let item2 = arr2[j];

      if (item1 === item2) {
      
        if (duplicateNumber.includes(item1) !== true)
        duplicateNumber.push(item1)
      }
    }
  }
  return duplicateNumber.sort()
}
