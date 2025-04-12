// function greet(name){
//     return `hello ${name}`;
// }

// console.log(greet("Sushant"));



//CollBack FUnction
function fetchdata(callback){
    setTimeout(() => {
        callback("Data fetched successfully");
    }, 3000);
}

fetchdata((data) => {
    console.log(data);
})