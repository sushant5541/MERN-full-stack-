// Question02 Find a = [3,7,8,6,2,5] maximum and minimum ------------------

function findMaxAndMin(arr){
    if(arr.length === 0){
        return {max:undefined, min:undefined}
    }

    let max = arr[0]
    let min = arr[0]

    for(let i = 0; i<arr.length; i++){

        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return { max: max, min: min}
}

let array = [3,7,8,6,2,5]

console.log("original array: ", array)

console.log(findMaxAndMin(array));
