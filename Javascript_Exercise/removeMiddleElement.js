
// Question 16: Write a program to remove the middle element from an array, or if the middle element is not there, remove every element except the first and last ones.
// Description: - Determine if the array has an odd or even number of elements, then remove the middle element or all elements except the first and last ones accordingly.

function removeMiddleEle(arr){
    const n = arr.length;

    if(n%2 === 1){
        const middleIndex = Math.floor(n/2)
        arr.splice(middleIndex, 1)
    }
    else{
        arr.splice(1, n-2)
    }
    return arr
}

let arr = [4,5,6,9,5,7]
console.log(removeMiddleEle(arr));
