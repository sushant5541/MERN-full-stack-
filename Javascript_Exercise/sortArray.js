// Question 24: Write a function to sort an array without using built-in methods.
// Description: - Implement the Bubble Sort algorithm to sort the array.

//fro ascending
function sortAscending(arr){
    const n = arr.length

    for(let i = 0; i<n; i++){
        for(let j = 0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


//For Descending
function sortDecending(arr){
    const n = arr.length

    for(let i = 0; i<n; i++){
        for(let j = 0; j<n-i-1; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
