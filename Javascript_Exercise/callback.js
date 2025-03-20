
function greet(name, callback){
    console.log("hii", name);
    callback()
   
}

function sayWelcome(){
    console.log("Welcome")
}

greet("sushant", sayWelcome);




// Asynchronous callback

function fetchdata(callback){
    setTimeout(() => {
        const data = { id: 1, name: "Sushant patil"}
        callback(data)
    }, 2000)
}


function handleData(data){
    console.log("data received :", data);
    
}

fetchdata(handleData)