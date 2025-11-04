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

