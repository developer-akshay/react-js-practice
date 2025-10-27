function arrayProductExcludingCurrent(numbers) {
  let arrProduct = [];
  for (let i = 0; i < numbers.length; i++) {
    let product = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (j != i) {
        product *= numbers[j];
      }
    }
    arrProduct.push(product);
    product = 1;
  }
  return arrProduct;
}

console.log(arrayProductExcludingCurrent([1, 2, 3])); // [6,3,2]
console.log(arrayProductExcludingCurrent([2, 0, 3])); // [0,6,0]
console.log(arrayProductExcludingCurrent([0, 0, -1, 1])); // [0,0,0,0]
