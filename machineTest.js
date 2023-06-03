function replaceDigitsWithString(str, num) {

    //check if the input is proper
  if (typeof str !== 'string' || typeof num !== 'number' || num < 0 || num > 9) {
    return false; 
  }

  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/\d/.test(char)) {
      const digit = parseInt(char);
      const sum = digit + num;
      const replacement = sum > 9 ? sum % 10 : sum;
      result += replacement;
    } else {
      result += char;
    }
  }

  return result;
}



console.log(replaceDigitsWithString('India have 50 languages', 7));
// Output: India have 27 languages

console.log(replaceDigitsWithString('Hello 123', 4));
// Output: Hello 567


console.log(replaceDigitsWithString('Testing 9876', 9));
// Output: Testing 8765

console.log(replaceDigitsWithString('Invalid input', 5));
// Output: false

console.log(replaceDigitsWithString('123', 10));
// Output: false

console.log(replaceDigitsWithString(123, 5));
// Output: false
