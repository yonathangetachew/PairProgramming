// function separateOddEvenNumbers(array) {
//     var oddNumbers = [];
//     var evenNumbers = [];
  
//     for (var i = 0; i < array.length; i++) {
//       if (typeof array[i] === 'number' && !isNaN(array[i])) {
//         if (array[i] % 2 === 0) {
//           evenNumbers.push(array[i]);
//         } else {
//           oddNumbers.push(array[i]);
//         }
//       }
//     }
  
//     return {
//       oddNumbers: oddNumbers,
//       evenNumbers: evenNumbers
//     };
//   }  
  
// var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var result = separateOddEvenNumbers(randomArray);

// console.log(result.oddNumbers);  // Output: [1, 3, 5, 7, 9]
// console.log(result.evenNumbers); // Output: [2, 4, 6, 8, 10]


function separateOddEven(arr) {
    const evenArr = arr.filter(num => num % 2 === 0)
    const oddArr = arr.filter(num => num % 2 !== 0)
    console.log(`Even numbers: ${evenArr}`)
    console.log(`Odd numbers: ${oddArr}`)
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

separateOddEven(arr)