const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'redhat',
    database: 'sample'
    
});

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to the database', err);
        return;
    }
    console.log('Connected to the database');


    connection.query(
        'SELECT * FROM student',
        (err, results, fields) => {
            if(err) {
                console.error('Error executing the query', err);
                return;
            }
            console.log(results);
            connection.end();
            console.log('Disconnected from the database');
            
        }
    )
});