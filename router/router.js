const path = require('path');
const express = require('express')
const app = express()


const port = process.env.PORT || 2000

app.use(express.static(path.join(__dirname, '../')));

app.get('',(req,res)=>{
    res.render('index')
})

app.listen(2000, ()=>{
    console.log('server is up on ',port)
    console.log(__dirname)
})