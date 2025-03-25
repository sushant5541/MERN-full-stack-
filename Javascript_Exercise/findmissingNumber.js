// Question 15: Write a program to find the missing numbers in an array containing numbers from 1 to 100.
// Description: - Compare the array with a reference array containing numbers from 1 to 100 to find the missing numbers.


function missingNumber(arr){
    let refernceArray = Array.from({length:100}, (_, i)=>i+1)

    const missingNum = []

    for(let i=0;i<refernceArray.length; i++){
        if(!arr.includes(refernceArray[i])){
            missingNum.push(refernceArray[i])
        }
    }

    return missingNum
}

let arr = [1,57,90,35,44,88,66,11,55,98,76,65,54,32,69,68,67]
console.log(missingNumber(arr));
