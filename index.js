const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send("testing purposes")
})

app.get('/testing',(req,res)=>{
    res.send("testing all data for my testing purposes")
})

app.listen(8080)