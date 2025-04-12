// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched successfully");
//         reject("An error occurred");
//     }, 2000);
// })




// promise.then((res) => console.log(res));
//         .catch((err) => console.log(err));

// let p1 = Promise.resolve(10);

// let p2 = new Promise((resolve, reject) => {
//     resolve(20)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve(80)}, 2000)
// })


// Promise.all([p1, p2, p3]).then((result)=> console.log(result) 
// )



let p1 = new Promise((resolve, reject) => {

})


 async function executePromise(){
    let resopnse = await p1
    console.log(resopnse);
    
}

executePromise().catch((error) => console.log(error));
