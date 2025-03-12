// function outerfunction() {
//     let outervariable = "i am from the outer function";

//     function innerfunction() {
//         console.log(outervariable);
//     }
//     return innerfunction;
// }


// const closure = outerfunction();
// closure();

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
