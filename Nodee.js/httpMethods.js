let express = require("express");
let bodyParser = require("body-parser");
let app = express();
const PORT = 3000;
app.use(bodyParser.json());

let user_data = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com"
    }
]

let incID = 3;

// GET METHOD
app.get('/user', (req, res) => {
    res.json(user_data);

})

app.get("/user/:id", (req, res) => {
    let user_id = Number(req.params.id);
    let filterd_user = user_data.find(user => user.id === user_id);
    console.log(filterd_user);
    
    if(filterd_user){
        res.json(filterd_user);
    }
    else {
        res.status(404).json({message: "User not found"});
    }
})

// POST METHOD
app.post('/user', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    new_user = {
        id: incID++,
        name: name,
        email: email
    }

    user_data.push(new_user);
    res.status(201).json(new_user);
    console.log(new_user);   
})

// PUT METHOD

app.put('/user/:id', (req, res) => {
    let user_id = Number(req.params.id);
    let inp_name = req.body.name
    let inp_email = req.body.email

    let filterd_user_index = user_data.findIndex(user => user.id === user_id);
    if(filterd_user_index!== -1){
        user_data[filterd_user_index] = {
            id: user_id,
            name: inp_name,
            email: inp_email 
        }
        res.json(user_data[filterd_user_index]);
    }
    else {
        res.status(404).json({message: "User not found"});
    }
  
})


// PATCH Method

app.patch('/user/:id', (req, res) => {
    let user_id = Number(req.params.id);
    let inp_body = req.body;

    let filterd_user_index = user_data.findIndex(user => user.id === user_id);
    if(filterd_user_index!== -1){
      Object.keys(inp_body).forEach(key => {
        if(key in user_data[filterd_user_index]){
            user_data[filterd_user_index][key] = inp_body[key];
        }
      })
      res.json(user_data)
    }
    else {
        res.status(404).json({message: "User not found"});
    }
  
})



//DELETE METHOD 

app.delete('/user/:id', (req, res) => {
    let user_id = Number(req.params.id);
    user_data = user_data.filter(user => user.id != user_id)
    res.json({user_data, message: "data deleted"});
});




app.listen(PORT, (req, res) => {
    console.log("Server is running on port 3000");
})