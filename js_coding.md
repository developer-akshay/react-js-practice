# Write a function that reverses a given string.
- 
const reverseString=(word)=>{
  let newWord='';
  for(let i = word.length - 1  ; i >= 0; i--){
    newWord += word[i];
  }
  return newWord;
}

let word = 'abc';
console.log(reverseString(word));

- 
function reverseString (str) {
  let newWord = str.split("").reverse().join("");
  return newWord;
}

let word = 'abc';
console.log(reverseString(word));

# Write a function that finds the longest word in a sentence.
- 
let sentence = 'The quick quickiee brown fox jumps over the lazy dog';

let newSentence = sentence.split(" ");

let maxWord = ''

for(let i =0 ; i<=newSentence.length -1; i++){
  if(newSentence[i].length>maxWord.length){
    maxWord = newSentence[i];
  }

}
  console.log(maxWord)

- 

let sentence = 'The quick quickiee brown fox jumps over the lazy dog';

function longestWord(sentence) {
  return sentence.split(" ").reduce((longest,current)=>
    longest.length < current.length ?current : longest
  )
}
console.log(longestWord(sentence))

#  Write a function that removes duplicates from an array.

1. A Set is a built-in JavaScript object that stores unique values only.
2. Set returns iterable object 
3. new Set(arr) removes duplicates, but it returns a Set object, not an array.

- Why use [ ... ] and the spread operator

1. The spread operator ... "spreads" or unpacks the values of an iterable (like a Set) into a new array.
2. [...new Set(arr)] means: "Take all the unique values from the Set and put them into a new array."
3. If you don't use [... ], you'll get a Set object
4. But if you want to return a regular array (which is what most code expects), you do
return [...new Set(arr)];

- 
function removeDuplicates(str) {
  return [...new Set(str)]
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

- 
function removeDuplicates(str) {
  let unique = [];
  for(let i = 0; i<=str.length-1; i++){
    let isDuplicate = false;
    for(let j=0;j<=unique.length-1;j++) {
      if(str[i]===unique[j]){
        isDuplicate=true;
        break;
      }
    }
    if(!isDuplicate){
      unique[unique.length] = str[i];
    }
  }
  return unique
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

# Given an array containing numbers from 1 to N, with one number missing, find the missing number.

- 
function findMissingNumber(arr){
let sorted = arr.sort((a, b) => a - b);
  let missingValues = [];

 for (let i = 0; i < sorted.length - 1; i++) {
    let current = sorted[i];
    let next = sorted[i + 1];

    while (next - current > 1) {
      current++;
      missingValues.push(current);
    }
  }

  return missingValues;
}
console.log(findMissingNumber([1, 8, 2, 3, 5]));

# Write a function that checks if a given string is a palindrome.

- 
function checkPalindrome(str) {
  return str.split("").reverse().join("") === str
}

console.log(checkPalindrome("abaa"));
console.log(checkPalindrome("aba"));

# Write a JavaScript function generateArray(min, max, step, divident) that generates an array of numbers starting from the min value and ending at the max value, both inclusive. The function should increment each number by the given step value and skip any number that is divisible by the specified divident. However, the array should always include the min and max values, even if the max is divisible by the divident. Finally, return the resulting array.

- 
 function generateArray(min,max,step,divident) {
  let range = []
  range.push(min)
  let nextStep = min+step;
  while (nextStep<max) {
    if(nextStep % divident != 0 ) {
      range.push(nextStep)
    }
    nextStep += step ;
  }
  if(max%7 !=0){
    range.push(max)
  }
return range
 }

 console.log(generateArray(1, 14, 1, 7))

 # Given a string str consisting of characters '(', ')', '{', '}', '[', and ']', determine if the input string is properly balanced. A string is considered balanced if each opening bracket is closed by the same type of bracket, brackets are closed in the correct order, and any subset of brackets enclosed within a matched pair is also properly balanced.

 - EXAMPLE :
Input: str = "[]"
Output: true
Explanation: The string contains correctly paired and ordered brackets.

Input: str = "([)]"
Output: false
Explanation: The string contains correctly paired brackets but they are incorrectly ordered.

Input: str = "([]){}"
Output: true
Explanation: The string contains correctly paired and ordered brackets.

- 
function isBalancedBrackets(str) {

  const pairs = { "{": "}", "[": "]", "(": ")" };
  const stack = [];

  for(let char of str) {
    if(pairs[char]) {
      //opening bracket
      stack.push(pairs[char])
    } else if(char == "}"||char == "]" || char == ")"){
      if(stack.pop() != char) {
        return false
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalancedBrackets("[]{[{}]}"))

# Given an array of integers numbers, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.

- EXAMPLES
Input: numbers = [5,7,1,3]
Output: false
Explanation: All elements in the array are unique.

Input: numbers = [10,7,0,0,9]
Output: true
Explanation: 0 appears more than once.

- 
function findDuplicates(numbers) {
  if(numbers.length != [...new Set(numbers)].length){
    return true
  }else {
    return false
  }
}
console.log(findDuplicates([5,7,1,3]))

# Given an array numbers of size n storing n different integers which fall within the range [0, n], implement a function to identify the missing element in the array. All numbers except one are present in the array. Find the missing number. 

- 
Input: numbers = [1,3,0]
Output: 2
Explanation: The array has a size of 3, and within the range from 0 to 3, the number 2 is missing from the array
- 
Input: numbers = [1]
Output: 0
Explanation: The array has a size of 1, and within the range from 0 to 1, the number 0 is missing from the array
- 
Input: numbers = [3,0,4,2,1]
Output: 5
Explanation: The array has a size of 5, and within the range from 0 to 5, the number 5 is

- 
function findMissingNumberInSequence(numbers) {
  let maxRange = numbers.length;
  let sortedNum = numbers.sort((a,b)=>a-b)

  if (sortedNum[0] !== 0) return 0;

  for(let i=0;i<maxRange -1 ;i++) {
    if(sortedNum[i+1] != (sortedNum[i] +1) ) {
      return sortedNum[i] + 1
    }
  }
  return sortedNum[sortedNum.length - 1] + 1;
}
console.log(findMissingNumberInSequence([1]))

# Given an array of integers numbers, determine the subarray that has the highest product and return that product. A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order, such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections like [1, 3] are not valid subarray.

- 
Input: numbers = [1,2,-3,5,1]
Output: 5
Explanation: The subarray [5, 1] has the largest product i.e 5.
- 
Input: numbers = [9]
Output: 9
Explanation: The single-element subarray [9] has the largest product i.e 9.
- 
Input: numbers = [1,2,0,-1,8,-4]
Output: 32
Explanation: The subarray [-1, 8, -4] has the largest product i.e 32.

- 

