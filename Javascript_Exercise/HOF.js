let arr = [2,4,5,7,8]
const doubled = arr.map((num) => num*2)
console.log(doubled);


let ar = [2,4,5,7,8]
ar.forEach(function(num){
    console.log(num);  
})

ar.find(function(num){
    console.log(num>2);
    
})





let arr1 = [2,3,4,6,7,8,10]
const even = arr.filter((num) => num%2 === 0)
console.log(even)



const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 


// Higher-order function
function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); 
console.log(triple(5)); 