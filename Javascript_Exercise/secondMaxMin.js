// Question 23:

function secondMaxMin(arr){
    arr.sort((a,b) => a-b)

    const secondMin = arr[1]

    const secondMax = arr[arr.length-2]

    return {secondMax, secondMin}
}