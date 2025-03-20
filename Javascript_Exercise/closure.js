function outerfunction(){
    const outerVariable = "I am form outer function"

    function innerfunction(){
        console.log(outerVariable)
    }

    return innerfunction()
}

outerfunction()




function createCounter() {
    let count = 0; 

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 