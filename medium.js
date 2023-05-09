// function vowelsCount(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//         count++;
//       }
//     }
//     return count;
//   }
    
//   console.log("This word has ", vowelsCount("INTRODUCTION"), " vowels.");
//   console.log("This word has ", vowelsCount("javascript"), " vowels.");
//   console.log("This word has ", vowelsCount("mathematics"), " vowels.");
//   console.log("This word has ", vowelsCount("AlphabEt"), " vowels.");



  function vowelsChecker(str) {
    let vowel = 'a' || 'e' || 'i' || 'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U';
      if (str.includes(vowel)) {
        return(`This letter is a vowel`);
      } else {
        return(`This letter is not a vowel`);
      }
    }

    console.log(vowelsChecker("a"))
    console.log(vowelsChecker("b"))
    console.log(vowelsChecker("c"))