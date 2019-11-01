const mongoose = require('mongoose')


const playerSchema = new mongoose.Schema({
    name: String,
    position: String,
    number: Number
});

module.exports = mongoose.model('Player', playerSchema);
