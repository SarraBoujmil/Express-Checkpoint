const express= require("express")

const app= express()
const logger=require('./middleware/logger')
const fs= require('fs')

const port= 8080

 app.use(logger)
app.get('/firstApi',(req,res)=>{res.json("hello there!")}) 
app.get('/',(req,res)=>{
    fs.readFile('./Homepage.html','utf-8',(err,data)=>err?console.log(err):res.send(data))
})

app.get('/services',(req,res)=>{
    fs.readFile("./OurServices.html",'utf-8',(err,data)=>err?console.log(err):res.send(data))
})

app.get('/contact',(req,res)=>{
    fs.readFile("./Contactus.html",'utf-8',(err,data)=>err?console.log(err):res.send(data))
})

app.listen(port,(err)=>{err?console.log(err):console.log(`app listening on ${port}`)})
