// Question 19
// Define a function to find the length of the longest substring without repeating characters

function lengthOfLongestSubstring(s){

    const n = s.length
    const charMap = {}
    let maxLength = 0
    let end = 0

    for(end=0;end<n;end++){
        const char = s[end]



        if(charMap[char] !== undefined){
            start = Math.max(start, charMap[char]+1)
        }

        charMap[char] = end
        maxLength = Math.max(maxLength, end-start+1)
    }

    return maxLength
}