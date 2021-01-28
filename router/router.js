const path = require('path');
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '../')));

app.get('',(req,res)=>{
    res.render('index')
})

app.listen(2000, ()=>{
    console.log('server is up on 2000')
    console.log(__dirname)
})