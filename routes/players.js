const express = require('express')
const router = express.Router()
const Player = require('../models/player')

router.get('/', (req,res) => {
    Player.find({}, (err, players) => {
        res.json(players)
    })
})

router.post('/', (req,res) => {
    const newPlayer = Player(req.body)
    newPlayer.save((err, player) => {
        res.json(player)
    })
})

module.exports = router