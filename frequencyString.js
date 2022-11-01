/*
Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' are both the most common, return 'a' because it is closest to the beginning of the alphabet). Be sure to exclude spaces when counting
characters.
*/




const sentence = "What is the most common character in this sentence";

// removes duplicates (helper function)
function removeDuplicates(arr1) {
    let finalArr = [];
    for (i=0;i<arr1.length;i++) {
      if (finalArr.includes(arr1[i]) || arr1[i]=== ' ') {
        continue;
      } else {
        finalArr.push(arr1[i]);
      }
    }
    return finalArr;
  }

const mostCommonChar = sentence => {
    let lowerSentence = sentence.toLowerCase()
    let letterList = lowerSentence.split('');
    let uniqueLetters = removeDuplicates(letterList)
    let count = [];
    let highestFrequency = 0;
    let index = -1;

    //sort the unique letters alphabetically
    uniqueLetters = uniqueLetters.sort();

    //removes all spaces from sentence
    for (i=0;i<letterList.length;i++) {
        if (letterList[i] === ' ') {
            letterList.splice(i,1);
        }
    }

    //counts all the frequencies and pushes to array "count"
    for (i=0;i<uniqueLetters.length;i++) {
        let currentCount = 0;
        let counting = true;

        while (counting) {
            for (j=0;j<letterList.length;j++) {
                if (uniqueLetters[i]===letterList[j]) {
                    currentCount++;
                }
            }
            count.push(currentCount);
            counting = false;
            break;
        }
    }

    //finds index of the highest frequency and picks it lexicographically
    for (i=0;i<count.length;i++) {
        if (count[i]>highestFrequency) {
            highestFrequency = count[i];
            index = i;
        }
    }

    return uniqueLetters[index];

}

console.log(mostCommonChar(sentence));           //  "t"
