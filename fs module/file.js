const express = require('express')
const fs = require('fs')
const app = express()



app.get('/', (req, res) => {

    let readfile = fs.readFile("test.txt", 'utf-8', ( req, res) =>{
        res.send(readfile)

    } )

    let createfile = fs.writeFile("demo.txt", 'utf-8', "hello world", (req,res)=>{
        res.send("file created success")

    })

    let appendFile = fs.appendFile("demo.txt", "utf-8", "/n added some text", (req, res)=>{
        res.send("")

    })

    let deletefile = fs.unlink("demo.txt", "utf-8", (req, res)=>{
        res.send("file has been deleted")
        
    })


    
   

})


