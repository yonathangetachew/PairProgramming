function largestCommonDivisor(num1, num2) {
    var divisor = Math.min(num1, num2);
  
    while (divisor > 0) {
      if (num1 % divisor === 0 && num2 % divisor === 0) {
        return divisor;
      }
      divisor--;
    }
  
    return 1; // If no common divisor is found, 1 is returned by default
  }
  

console.log(largestCommonDivisor(24, 60)); // Output: 12
console.log(largestCommonDivisor(18, 17)); // Output: 1
