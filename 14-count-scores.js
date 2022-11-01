/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/




// removes duplicates
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


function countScores(people) {
  let names = [];
  let scores = [];
  // first iterate thru the list of objects
  for (i=0;i<people.length;i++) {
    names.push((people[i].name))
  }

  names = removeDuplicates(names);

  for (i=0;i<names.length;i++) {
    currentSum = 0;
    let counting = true;

    while (counting) {
      for (j=0;j<people.length;j++) {
        if (people[j].name===names[i]) {
          currentSum += people[j].score
        }
      }
      scores.push(currentSum);
      counting = false;
      break;
    }
  }

  let scoreTally = {};

  for (i=0;i<names.length;i++) {
    scoreTally[names[i]] = scores[i];
  }

  return scoreTally;
}


let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
