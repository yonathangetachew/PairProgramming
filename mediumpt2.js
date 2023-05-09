function isAnagram(string1, string2) {
    // Convert strings to lowercase
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
  
    // Check if the sorted characters of both strings are equal
    return sortString(string1) === sortString(string2);
  }
  
  function sortString(string) {
    return string.split('').sort().join('');
  }
  

console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world'));   // Output: false
