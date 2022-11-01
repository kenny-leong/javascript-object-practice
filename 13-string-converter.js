/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
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

function stringConverter(string) {
  let letterList = string.split('');
  let unique = removeDuplicates(letterList);
  let count = [];

  for (i=0;i<unique.length;i++) {
    let currentCount = 0;
    let counting = true;

    while (counting) {
      for (j=0;j<letterList.length;j++) {
        if (unique[i]===letterList[j]) {
          currentCount++;
        }
      }
      count.push(currentCount);
      counting = false;
      break;
    }
  }
  let obj = {};
  for (i=0;i<unique.length;i++) {
    obj[unique[i]] = count[i];
  }
  return obj;
}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
