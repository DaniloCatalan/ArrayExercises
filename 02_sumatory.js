// Create a function that sums all numbers up to n,
// where n is the input parameter to the function
// and n is an integer

function sumatory(n) {
  var suma = 0;
  for (var i = 1; i <= n; i++) {
    suma = suma + i;
  }
  return suma;
}

console.log('---')
console.log(sumatory(10))

console.log('---')
console.log(sumatory(6))

console.log('---')
console.log(sumatory(30))
