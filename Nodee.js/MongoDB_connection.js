const express = require('express')
const mongoose = require('mongoose')

const app = express()

connection_url = "mongodb://localhost:27017/sample"

mongoose.connect(connection_url).then(() => console.log("Mongo connection established"))

 const student = mongoose.model('student', {}, 'student')

student.find({}).then(student => console.log(student))


app.get("", (req, res) => {
    db.student.find({}).then(student => res.json(student))
})


app.listen(4000, () => console.log("server started"))


