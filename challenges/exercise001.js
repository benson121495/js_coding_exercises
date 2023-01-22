// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
 
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  let vatCost = originalPrice * vatRate / 100 ;
  let answer = originalPrice + vatCost ;
  return Math.floor(answer * 100) / 100;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let salesPrice = originalPrice - (originalPrice * (reduction / 100));
  return Math.round(salesPrice * 100) / 100;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length)

}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

   return words.map(word => word.split('').reverse().join(''));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let counter = 0
  users.forEach(user => {
    if (user.type === "Linux") {
      counter++
    }
  })
  return counter;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let sum = 0;
  for (let i in scores) {
    sum += scores[i];
  }
  let numCount = scores.length; {
    let answer = sum / numCount
    return Math.round(answer * 100) / 100;
  }
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if ((n % 3 === 0) && (n % 5 === 0)) {
    return "fizzbuzz";
  } else
    if (n % 3 === 0) {
      return "fizz"
    } else {
      if (n % 5 === 0)
        return "buzz"
      else {
        return n
      }
    }
}
