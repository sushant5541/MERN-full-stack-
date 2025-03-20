const fetchdata = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const success = true
        if(success){
            console.log("data fetched");
            
        }
        else {
            console.log("failed to fetching");
            
        }
    }, 2000)
})


fetchdata.then((result) => {
    console.log(result);
    
})
.catch((error) => {
    console.log(error);
    
})





const promise1 = Promise.resolve('Step 1');
const promise2 = Promise.resolve('Step 2');
const promise3 = Promise.resolve('Step 3');

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('Error:', error);
    });



    async function fetchData() {
        try {
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = true;
                    if (success) {
                        resolve('Data fetched successfully');
                    } else {
                        reject('Error fetching data');
                    }
                }, 2000);
            });
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }