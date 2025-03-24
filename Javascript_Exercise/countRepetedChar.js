// Question 11: Write a function to count repeated characters in a string and print in a string format.
// Description: - Iterate through the string and count the occurrences of each character.


function countRepetedChar(str){
    let countChar = {}

    for(const char of str){
        countChar[char] = (countChar[char] || 0)+1
    }

    let repetedCharacterStaring = ''
    for(const char in countChar){
        if(countChar[char] > 1){
            repetedCharacterStaring += `${char}:${ countChar[char]}`
        }
    }
    return repetedCharacterStaring.trim()

}

let str = 'hello brother'

console.log(countRepetedChar(str));
