import React, { Component } from 'react';
import axios from 'axios'
import {
    Link 
} from 'react-router-dom';
class OneTeam extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            team: [],
            players: []
        }
    }
    componentDidMount(){
        axios.get("/teams/" + this.props.match.params.id).then(response => {
            this.setState({
                team: response.data,
                players: response.data.players
            })
            console.log(response.data)
            console.log(this.props.match.url)
            console.log(response.data.players)
    })
    }
    
    render() { 
        var mappedPlayers = this.state.players.map(player => (
            <div>
                <hr />
                <p key={player._id}>Player Name: {player.name} |  Player Position: {player.position} | Player Number: {player.number}</p>
                <hr></hr>
            </div>
            ))
        return ( 
            <>
            <h1><u>Here is the page for: {this.state.team.name}</u></h1>
            <h3><Link to={"/edit/" + this.props.match.params.id}>Edit This Team</Link> </h3>
            <hr />
            <h2>Sport they play: {this.state.team.sport}</h2>
            <hr />
            <h2>Players on this team:</h2>
            {mappedPlayers}
            </>
         );
    }
}
 
export default OneTeam;