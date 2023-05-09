function hasMatchingBrackets(str) {
    var stack = [];
    var openingBrackets = ['{', '[', '('];
    var closingBrackets = ['}', ']', ')'];
    var bracketPairs = {
      '}': '{',
      ']': '[',
      ')': '('
    };
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
  
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

console.log(hasMatchingBrackets(`{hello world}`));   // Output: true
console.log(hasMatchingBrackets(`{hello world]`));   // Output: false

