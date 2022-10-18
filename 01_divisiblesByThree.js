// Create a function that prints numbers divisible by 3
// up to n, where n is the input parameter to the function
// and n is an integer

function divisbleByThree(n) {
  for (var i = 0; i <= n; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
