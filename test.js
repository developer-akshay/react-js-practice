function arrayReachableEnd(numbers) {

    let maxIndex = 0;
    let reachable = false 
    for( let i = 0 ; i<=maxIndex; i++) {
        
        let reachableIndex = i + numbers[i];
        let arrMaxIndex = numbers.length-1;
        maxIndex = Math.max(maxIndex, reachableIndex);
        
        console.log('i : ',i, ' reachableIndex : ', reachableIndex, ' arrMaxIndex : ',arrMaxIndex, 'maxIndex : ',maxIndex)

        if(arrMaxIndex <= reachableIndex) {
            reachable = true;
            break
        }
    }
    return reachable
}
console.log(arrayReachableEnd([2,2,0,3,2,2,4])); // true
console.log(arrayReachableEnd([4, 1, 0, 0, 2, 3])); // true 
console.log(arrayReachableEnd([1, 0, 0, 0])); // false
console.log(arrayReachableEnd([2, 3, 1, 1, 4])); // true [3, 0, 0, 0, 1]
console.log(arrayReachableEnd([3, 0, 0, 0, 1])); // false
console.log(arrayReachableEnd([3, 2, 1, 3, 1])); // true

// 1 iterate every element for every iteration find first index value thats the jump you can take 
// 2 once found the value check if it's reachable to the end index 