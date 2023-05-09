function findPrimeNumbers(array) {
    return array.filter(function(number) {
      if (number < 2) {
        return false;
      }
  
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
  
      return true;
    });
  }
  

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var primes = findPrimeNumbers(randomArray);

console.log(primes); // Output: [2, 3, 5, 7]
