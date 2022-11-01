/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function removeDuplicates(arr1) {
  let finalArr = [];
  for (i=0;i<arr1.length;i++) {
    if (finalArr.includes(arr1[i])) {
      continue;
    } else {
      finalArr.push(arr1[i]);
    }
  }
  return finalArr;
}

function arrayConverter(array) {
  let obj = {};
  let count = [];
  let names = removeDuplicates(array);

  for (i=0;i<names.length;i++) {
    let currentCount = 0;
    let counting = true;

    while (counting) {
      for (j=0;j<array.length;j++) {
        if (names[i]===array[j]) {
          currentCount++
        }
      }
      count.push(currentCount);
      counting = false;
      break;
    }
  }

  for (i=0;i<names.length;i++) {
    obj[names[i]] = count[i]
  }

  return obj
}

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
