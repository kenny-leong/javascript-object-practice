/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  let arr1 = [];
  let bool = false
  for (i=0;i<objArray.length;i++) {
    let currentKey = Object.keys(objArray[i])
    for (j=0;j<currentKey.length;j++) {
      arr1.push(currentKey[j])
    }
  }
  for (i=0;i<arr1.length;i++) {
    if (arr1[i]===keyString) {
      bool = true;
      break;
    } else {
      bool = false;
    }
  }
  console.log(bool)
  return bool;
}

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];


keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
