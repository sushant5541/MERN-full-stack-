
// Question 14: Write a program to find the count of the maximum prefix and suffix that are the same in a given string.
// Description: - Iterate through the string and compare prefixes with suffixes to find the maximum count.

function maxCountPrefixSufix(str){
    let maxCount = 0

    for(let i=0; i<str.length; i++){
        const prefix = str.substring(0, i+1)
        const suffix = str.substring(str.length - (i+1))

        if(prefix === suffix){
            maxCount = i+1
        }
    }

    return maxCount

}

let str = "abcdedcba"
console.log(maxCountPrefixSufix(str));
