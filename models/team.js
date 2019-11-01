const mongoose = require('mongoose')



const teamSchema = new mongoose.Schema({
    name: String,
    sport: String,
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
});



module.exports = mongoose.model('Team', teamSchema)


