// function step1(callback){
//     setTimeout(() => {
//         console.log("1st step executed")
//         callback()
//     }, 2000)
   
// }

// function step2(callback){
//     setTimeout(() => {
//         console.log("2nd step executed")
//         callback()
//     }, 2000)
   
// }

// function step3(callback){
//     setTimeout(() => {
//         console.log("3rd step executed")
//         callback()
//     }, 2000)
   
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("all steps executed")
//         })
    
//     })
// })




//using promises / async and await

function step1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 1 complete");
            resolve();
        }, 2000)
    })
}

function step2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 2 complete");
            resolve();
        }, 2000)
    })
}

function step3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 3 complete");
            resolve();
        }, 2000)
    })
}


step1().then(step2).then(step3).then(()=>{
    console.log("all steps completed")
}).catch((error) => console.log(error)
 )

// using async and await

async function runstep(){
    await step1()
    await step2()
    await step3()
    console.log('all step complete')
}

runstep()







