
// Question 29: Write a function to find the second largest number in a nested array.


// Description: - Recursively flatten the array and then find the second largest number from the flattened array.

// const nestedArray3 = [[1, 2], [3, 4, [5, 6]], [7, [8, 9]]];
// console.log(findSecondLargest(nestedArray3)); // Output: 8


function SecondLargest(nestedArray){
    const flattenedArray = nestedArray.flat(Infinity)
    const sortedArray = flattenedArray.sort((a,b)=>b-a)
    let secondLargest = null

    for(let i=1; i<flattenedArray.length; i++){
        if(sortedArray[i] !== sortedArray[i-1]){
            secondLargest = sortedArray[i]
            break
        }
    }

    return secondLargest
}