import React, {Component} from 'react';
import axios from 'axios'

class Players extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        players: []
        }
    }
    componentDidMount = () => {
      axios.get('/players').then(response => {
        this.setState({
            players: response.data
        })
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
          <div>
          <h1><u>All Players</u></h1>
          {mappedPlayers}
          <h1><a href="/newplayer">Add a new player here!!</a></h1>
          </div>
       );
    }
  }

export default Players;