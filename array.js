let arr = [1, 9, 10, 22, 7, 12, 20, 11, 15, 4];
console.log(arr);

// Sorting array in ascending order using .sort() function

arr.sort((a, b) => a-b);
console.log(arr);


// Sorting array in decending order using .sort() function

arr.sort((a, b) => b-a);
console.log(arr);

// Sorting array with the help of bubble sort

function SortByAscending(arr) {
    let len = arr.length;
    for(let i=0; i<len; i++){
        for(let j=0; j<len-i-1;j++){
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

let array = [45,12,36,85,2,49,23,89];
console.log("Asending Order: ", SortByAscending(array));

// Sorting array with the help of bubble sort in Descending

function SortByDescending(arr){
    let len = arr.length;
    for(i=0; i<len; i++){
        for(j=0; j<len-i-1; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log("Descending :", SortByDescending(array));


