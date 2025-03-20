// Question 07: Write a function to remove duplicate elements from an array without using default functions.
// Description: - Iterate through the array and build a new array with unique elements.

function removeDuplicates(arr){

    const uniqueArray = []

    for(let i = 0; i<arr.length; i++){
        if(uniqueArray.indexOf(arr[i]) === -1){
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}

let array = [1,2,3,4,3,2,1,5,6,7,5,]

console.log(removeDuplicates(array));
