// Question 22

// Define a function to rearrange the array as per the given pattern

function rearrangeArray(arr){
    const n = arr.length
    const result = []

    for(let i = n-1, j=0;i>=0;i--,j++){
        if(j%2 == 0){
            result.push(arr[i])
        }
        else{
            result.push(arr[j])
        }
    }

    return result
}