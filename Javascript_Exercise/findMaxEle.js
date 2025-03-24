// Question 08: Write a function to find the maximum number in an array.
// Description: - Iterate through the array to find the maximum number.

 function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }

    let max = arr[0]; // Assume the first element as maximum
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let array = [2,1,5,6,8,10,7]
console.log(findMaxNumber(array));

