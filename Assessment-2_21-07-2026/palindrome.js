function isPalindrome(str) {

let cleanedStr = str.toLowerCase();

let reversedStr = cleanedStr.split('').reverse().join('');

return cleanedStr === reversedStr;
}

console.log(isPalindrome("madam")   + "The string is a palindrome"); 


