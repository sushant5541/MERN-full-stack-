// Question 06: Write a function to check if a given string is a palindrome.
// Description: - Compare the given string with its reverse to check if it's a palindrome.

function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')

    return cleanStr === cleanStr.split('').reverse().join('')
}

let string = "A man, a plan, a canal, Panama"

console.log(isPalindrome(string));
