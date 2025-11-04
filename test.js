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
        if( !(key **2 in frequencyCounter2) ) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same ([1,2,3],[4,9,1]))
console.log(same([1,1,2],[1,4,4]))

