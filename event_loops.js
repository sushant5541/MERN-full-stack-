
let isDelivered = false;
function fun1() {
    console.log("Create order")
}

function fun2() {
    console.log("Make th payment!")
}

function fun3() {
    setTimeout(() => {
        console.log("Deliver the order")
        isDelivered = true;
    }, 3000)
}

function fun4() {
   console.log("Eat");
   
}


fun1(fun2, fun3, fun4);


