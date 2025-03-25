// Question 13: Write a JavaScript code to extract numbers between two characters in a string and add them all.
// Description: - Use regular expressions to extract numbers between two characters and sum them up.

function sumNumberBetStr(str){
    let regex = /(\d+)(?=[a-z])/g 
    const matches = str.match(regex)

    let sum = 0
    if(matches){
        for(const match of matches){
            sum+=parseInt(match)
        }
    }

    return sum
}

let str = "sd8d7n3u0nhu"

console.log(sumNumberBetStr(str));
