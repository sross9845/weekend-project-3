import React, {Component} from 'react';
import axios from 'axios'
import {
  Link 
} from 'react-router-dom';
class Teams extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        teams: []
        }
    }
    componentDidMount = () => {
      axios.get('/teams').then(response => {
        this.setState({
            teams: response.data
        })
    })
    }
    render() { 
      var mappedTeams = this.state.teams.map(team => (
        <div>
          <hr />
          <p key={team._id}>Team Name: {team.name} |  Sport: {team.sport} | <Link to={"/team/" + team._id}>More Info/Players</Link></p>
          <hr />
       </div>
      ))
      return ( 
        <div className='App'>
        <h1><u>All Teams</u></h1>
          {mappedTeams}
          <h1><a href="/newteam">Add a new team!!</a></h1>
        </div>
       );
    }
  }

export default Teams;


