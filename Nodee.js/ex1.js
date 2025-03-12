const express = require('express')

const app = express()

// app.get('', (req, res) => {
//     res.send("Welcome User!")
// });


// app.get('/:user/:company?', (req, res) => {                
//     res.send(`Hii ${req.params.user} Welcome to ${req.params.company}`);
// });


// app.get('/:userId?', (req, res) => {                // "?" => is use to if did not pass any value then it give undefined                    // /:userId(\\d{2,4}) ==> it gives only 2 to 4 digit user id
//    let user_id = req.params.userId
//    if(!user_id){
//     user_id = 0
//    }
//     res.send(`Your User ID: ${user_id}`);
// });


app.get('/:user?', (req, res) => {                // "?" => is use to if did not pass any value then it give undefined                    // /:userId(\\d{2,4}) ==> it gives only 2 to 4 digit user id
   let user= req.params.user
   if(!user){
    user = "User"
   }
    res.send(`Hii ${user} !!`);
});



app.get('/about', (req, res) => {
    res.send("This is About Page")
})





app.listen(3000, () => console.log("Server started at port 3000"))