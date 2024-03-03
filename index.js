require('dotenv').config()
// console.log(process.env)   // that how you use it

const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req,res) =>{
    res.send('hello youtube')
})

app.get('/login',(req,res) =>{
    res.send('<h1>You are logged in</h>')
})

app.get('/instagram',(req,res) =>{
    res.send('<a href="www.instagram.com">instagram</a>')
})


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
  })