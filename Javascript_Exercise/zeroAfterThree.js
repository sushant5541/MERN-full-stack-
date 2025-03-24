// Question 12: Write a program to add zeros after every 3 values in an array.
// Description: - Iterate through the array and add zeros after every 3rd value.

function zeroAfterThreeValues(arr){
    let newArr = []

    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i])
        if((i + 1) % 3 === 0 && i !== arr.length-1){
            newArr.push(0)
        }
    }

    return newArr
}


let arr = [1,3,4,5,6,7,8,9,1,4,9,5]
console.log(zeroAfterThreeValues(arr));
