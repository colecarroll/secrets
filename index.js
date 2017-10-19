const express = require('express');
require('dotenv').config() 

const app = express()
const port = process.env.PORT || 3000 

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.listen(port, (req, res) => {
    console.log('working')
})

