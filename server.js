const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: false }))

//mongoose stuff
mongoose.connect('mongodb://localhost/teams', {useNewUrlParser: true, useUnifiedTopology: true } )
const db = mongoose.connection;


db.once('open', () => {
    console.log(`Connected to mongoDB...`)
})

db.on('error', (error) => {
    console.log(`Database error:\n${err}`)
})

app.get('/', (req,res) => {
    res.send('home page')
})


app.use('/teams', require('./routes/teams'));
app.use('/players', require('./routes/players'));


app.listen(3000)