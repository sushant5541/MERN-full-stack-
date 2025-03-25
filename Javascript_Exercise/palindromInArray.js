// Question 18: Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]  
// Define a function to filter numeric palindromes from an array of strings

function filterNumericArray(arr){

    const isPalindrome = (num) =>{
        const str = num.toString()
        const reversedStr = str.spilt('').reverse().join('')
        return str === reversedStr
    }

    const result = arr.filter(item => !isNaN(item) && isPalindrome(parseInt(item)))
}


let arr = (["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"])

    console.log(filterNumericArray(arr));
    