export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings ;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester" ;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return Math.ceil(people / 40) ;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let count = 0;
  arr.forEach((i) => {
    if (i === 'sheep') {
      count++
    }
  });
  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  if (person.address.city === "Manchester" && person.address.postCode.startsWith('M')){
    return true ;
    } else {
      return false ;
    }
}
