// Question 09: Write a function to remove duplicate arrays from an array of arrays.
// Description: - Iterate through the array of arrays and filter out duplicate arrays.


function removeDuplicateArray(arrays){
    const uniqueArray = []
    const seenArray = new Set()

    for(const array of arrays){
        const arrayString = JSON.stringify(array)

        if(!seenArray.has(arrayString)){
            uniqueArray.push(array)
            seenArray.add(arrayString)
        }
    }

    return uniqueArray
}

let arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3],
    [7, 8, 9],
    [4, 5, 6]
];

console.log(removeDuplicateArray(arrays));
