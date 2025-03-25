// Question 17: Write a function to calculate the factorial of a number.
// Description: - Use recursion to calculate the factorial of the number.

function factorial(n){

    if(n===0 ||n===1){
        return 1
    }

    else{
        return n * factorial(n-1)
    }
}

let n = 6
console.log(factorial(n));
