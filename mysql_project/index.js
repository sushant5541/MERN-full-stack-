const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;
app.use(express.json());

// Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'redhat',
    database: 'sample'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Registration function
let register_function = (name, age, city, gender, callback) => {
    let query = `INSERT INTO student (fullname, age, city, gender) VALUES (?, ?, ?, ?)`;

    connection.query(query, [name, age, city, gender], (err, result, fields) => {
        if (err) {
            console.error('Database error:', err.message); // Log the error
            callback(err.message);
        } else {
            callback('success');
        }
    });
};

// Register route
app.post('/register', (req, res) => {
    let { name, age, city, gender } = req.body;

    if (!name || !age || !city || !gender) {
        return res.status(400).send("All field are required");
    }

    register_function(name, age, city, gender, (out) => {
        if (out === 'success') {
            res.status(200).send("Successfully Registered");
        } else {
            res.status(500).send("Failed to register: " + out);
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});