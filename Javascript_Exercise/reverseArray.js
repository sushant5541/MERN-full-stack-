// Question 20
// Define a function to reverse an array without using built-in functions

function revrseArray(arr){
    const n = arr.length

    const mid = Math.floor(n/2)

    for(let i=0; i<mid; i++){
        const temp = arr[i]
        arr[i] = arr[n-i-1]
        arr[n-i-1] = temp
    }

    return arr
}

console.log(revrseArray([2,4,7,9,5,3,]));
