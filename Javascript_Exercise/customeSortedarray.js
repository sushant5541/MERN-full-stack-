//Question 01:-Input a = [2,3,4,5,3,3,5,2,5,3] and Output [3,3,3,3,5,5,5,2,2,]  
// Description: - The customSortedArray function takes an array input from an outer file and returns a sorted array.

function customSortedArray(arr) {
    const countMap = {};

    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {

            const a = arr[j], b = arr[j + 1]
            const aCount = countMap[a], bCount = countMap[b]

            if (aCount !== bCount) {

                if (bCount > aCount || (bCount === aCount && b > a)) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
            else {
                if (b > a) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
        }

    }
    return arr;
}


let array = [2,3,4,5,3,3,2,5,5,3];
console.log("original array:", array)
console.log(customSortedArray(array))
