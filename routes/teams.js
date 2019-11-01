const express = require('express')
const router = express.Router()
const Team = require('../models/team')
const Player = require('../models/player')


router.get('/', (req,res) => {
    Team.find({}, (err, teams) => {
        res.json(teams)
    })
})
router.get('/:id', (req,res) => {
    Team.findById(req.params.id).populate('players').exec((err, team) => {
        res.json(team)
    })
})

router.post('/', (req,res) => {
    const newTeam = Team(req.body)
    newTeam.save((err,team) => {
        res.json(team)
    })
})

router.put('/:id', (req,res) => {
    Team.findByIdAndUpdate(req.params.id, req.body, (err, team) => {
        res.json(team)
    })
})

router.post('/:id/players', (req,res) => {
    Team.findById(req.params.id, (err, team) => {
        Player.findById(req.body.playerId, (err, player) => {
            team.players.push(player)
            team.save((err) => {
                res.json(team)
            })
        })
    })
})

module.exports = router


