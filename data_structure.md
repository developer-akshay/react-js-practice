# Big(O)
# Time complexity 
# Space complexity 
## Problem Solving approach 

1. Understand the problem 
2. concreate examples 
3. break it down 
4. Solve or simplify 
5. Look back & refactor 

- Example 
- Count the character of a string passed down as an input to a function.

- 
 function countChar(str) {
     let obj ={}
     for(let i = 0 ; i<str.length;i++) {
         var char = str[i].toLowerCase();
         if(char == ' ' || char.trim=='') continue
         if(obj[char]>0){
             obj[char]++
         }else {
             obj[char] =1
         }
     }
     return obj
 }
- Now above way is workable now think of something which you can optimize 
- 
<!-- Below is a utility function to check if it's alphanumeric or not  -->
function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (
      !(code > 47 && code < 58) && //numeric 0-9
      !(code > 64 && code < 91) && // upper Alpa A-Z
      !(code > 96 && code < 123)
    ) {
      //Lower alpha a-z
      return false;
    }
    return true;
  }
  
function countChar(str) {
    let obj ={}
    for(let char of str) {
        <!-- Below 2 lines we further refactored since regex is slower than comparison of charCodes  -->
         <!-- char = char.toLowerCase(); -->
         <!-- if(/[a-z0-9]/.test(char)) { -->
        if (isAlphaNumeric(char)){
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

<!-- char codes are more efficient then regular expression. -->

console.log(countChar('Ccount me in cunt 1234'));
## Problem solving pattern 

# Frequency Counter pattern 

- When to use: When you need to compare data patterns, counts, or relationships between elements in arrays/strings/objects.
- Core idea: Build a “frequency map” (like {value: count}) to keep track of occurrences.

- this pattern uses objects or sets to collect values / frequencies of values 
- This can often avoid the need of nested loops or  O(n^2) operations with array or strings  
- EXAMPLE 
1. Write a function called same which is getting 2 input of array, The function should return true if every value of first array have corrosponding square of it at second. The frwquency of the value should be the same.

- First approach 
function same(arr1, arr2) {
    if(arr1.lenghth !== arr2.length) return false
    for(let i = 0; i<arr1.length;i++) {
        let currentIndex = arr2.indexOf(arr1[i]**2)
        if(currentIndex === -1) return false ; 
        arr2.splice(currentIndex,1)
    }
    return true
}

console.log(same ([1,2,3],[4,9,1]))
console.log(same([1,1,2],[1,4,4]))

This approach is very slow since it's time Complexity is n^2, Since here we are using indexOf too inside the loop and it also have o(n)

- Here it's time complexity is O(n), always prefer not to use nested loops <Using multiple lopps independentily is always effective then nested loops >

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false
    let frequencyCounter1 ={}
    let frequencyCounter2 = {}

    for (let num of arr1) {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) +1
    }
    for (let num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) +1
    }
    console.log(frequencyCounter2, frequencyCounter1)
    for (let key in frequencyCounter1) {
        <!-- here checking if square of the key is not present at the obj so return false   -->
        if( !(key **2 in frequencyCounter2) ) {
            return false
        }
        <!-- here checking if count of the key is matching of the square of it at other object  -->
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same ([1,2,3],[4,9,1]))
console.log(same([1,1,2],[1,4,4]))

2. ANAGRAM || given 2 strings write a function to check if the second string is anagram of the first, an anargram is word, phrase or name formed by rearranging the letter of another like cinema formed from iceman 

- 
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false 
    let anagram1 = {}
    let anagram2 = {}
    for ( let word of str1 ) {
        anagram1[word] = (anagram1[word] || 0) +1 
    }
    for ( let word of str2 ) {
        anagram2[word] = (anagram2[word] || 0) +1 
    }
    for (let key in anagram1) {
        if ( !(anagram1[key] === anagram2[key]) ) {
            return false
        }
    }
    return true
}

console.log(validAnagram (' '," "))
console.log(validAnagram("zza","aaz"))
console.log(validAnagram("anagram","gramana"))
console.log(validAnagram("rat","car"))
console.log(validAnagram("textwise time","time textwise"))

<Now this is already good approach but here we can reduce one for loop for checking >

- 
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false 
    let anagram1 = {}
    for ( let word of str1 ) {
        anagram1[word] = (anagram1[word] || 0) +1 
    }
    for (let key of str2) {
        if(!anagram1[key]) return false
        anagram1[key] -= 1;
    }
    return true
}

console.log(validAnagram (' '," "))
console.log(validAnagram("zza","aaz"))
console.log(validAnagram("anagram","gramana"))
console.log(validAnagram("rat","car"))
console.log(validAnagram("textwise time","time textwise"))

- Here we have 
- Fewer lookups & less memory usage.
- Fewer iterations → faster runtime.
- On-the-fly validation allows early exit.
- Space Complexity	O(n) + O(n) = O(2n)	O(n) ||	Half the space usage.
- Time Complexity	O(n) + O(n) + O(n) = O(3n) → O(n) || O(n) + O(n) = O(2n) → O(n)	Same Big-O, but constant factor is smaller.

3. Frequency of Digits in Numbers, Determine if two numbers have the same frequency of digits.

- 
function sameFrequency(num1, num2) {

    let frequency = {}
    for(let num of num1.toString()) {
        frequency[num] = (frequency[num] || 0) +1
    };
    for (let num of num2.toString()){
        if(!frequency[num]) return false
        frequency[num] -= 1
    }
    return true
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14));   // false

- Time & space complexity is o(n)

- Now When to Use Object-Based Frequency Counter 
- You’re working with non-numeric characters (like words, letters, symbols)
- You don’t know the range of possible keys
- You want to handle dynamic or mixed-type data

- This can be more optimized since here we are just comparing numbers and it ranges from 0-9 only so array based frequency counter is good 

- Examples
- Checking if two words are anagrams
- Counting character frequency in a sentence
- Counting occurrences of items in a shopping cart
- Counting votes, responses, or tags dynamically

- APPROACH 2 

- 
function sameFrequency(num1, num2) {

    let str1 = num1.toString();
    let str2 = num2.toString();

    let count = new Array(10).fill(0); //it will create array with total number of 10 elements with 0 value 
    for(let i = 0 ; i<str1.length ;i++) {
        count[str1[i] - '0']++; // Here 0 is converting string to int since it does type conversion
        count[str2[i] - '0']--;   
    }

    return count.every(item => item === 0)
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14));   // false

- O(n) time — linear and minimal operations.
- O(1) space — always uses 10 slots (for digits 0–9).
- No hashing overhead — arrays use direct memory access, faster than JS objects.
- Cache-friendly — contiguous memory, faster at scale.
- Single pass — both numbers processed simultaneously.

# Multiple pointer pattern 

- write a function called sumZero which accept a sorted array of integers. the function should find the first pair where the sum is 0 return an array that includes both values that sum to zero or undefined if a pair does not exist.

- 

sumZero([-3, -2, -1 ,0,1,2,3]) // [-3,3]
sumZero([-2, 0, 1, 3]) // undefined 
sumZero([1,2,3]) // undefined 
