// Question 25: Write a function to remove duplicate characters in a string.
// Description: - Iterate through the characters of the string and keep track of the characters encountered so far.

function removeDuplicatesChar(str){
    let UniqueChar = ""


    for(const char of str){
        if(!UniqueChar.includes(char)){
            UniqueChar+=char
        }
    }

    return UniqueChar
}