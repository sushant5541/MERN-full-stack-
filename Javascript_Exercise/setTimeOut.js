// Question 05: Write a program to print numbers 1-10 with a delay of 1 second between each number.
// Description: - Use setTimeout to print numbers with a delay.


function printNumbersWithDelay (){
    let count = 1

    let interval = setInterval(() => {
        console.log(count)
        count++
        if(count>10){
            clearInterval(interval)
        }
    }, 2000)
}

printNumbersWithDelay()