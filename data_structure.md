# Big(O)
# Time complexity 
# Space complexity 
# Problem Solving approach 
1 Understand the problem 
2 concreate examples 
3 break it down 
4 Solve or simplify 
5 Look back & refactor 

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
# Problem solving pattern 

1. Frequency Counter pattern 

- this pattern uses objects or sets to collect values / frequencies of values 
- This can often avoid the need of nested loops or  O(n^2) operations with array or strings  
- EXAMPLE 
- Write a function called same which is getting 2 input of array, The function should return true if every value of first array have corrosponding square of it at second. The frwquency of the value should be the same.

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



