import React, {Component} from 'react';
import Teams from './Teams'
import Home from './Home'
import Players from './Players'
import AddPlayer from './AddPlayer'
import AddTeam from './AddTeam'
import OneTeam from './OneTeam'
import EditTeam from './EditTeam'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <Router>
      <nav>
        <Link to='/'>HOME</Link> {' | '}
        <Link to='/teams'>TEAMS</Link> {' | '}
        <Link to='/newteam'>ADD A TEAM</Link> {' | '}
        <Link to='/players'>PLAYERS</Link> {' | '}
        <Link to='/newplayer'>ADD A PLAYER</Link> {' | '}
      </nav>
      <div className='App'>
        <Route exact path="/" component={Home} />
        <Route path="/team/:id" component={OneTeam} />
        <Route path="/teams" component={Teams} />
        <Route path="/players" component={Players} />
        <Route path="/newplayer" component={AddPlayer} />
        <Route path="/newteam" component={AddTeam} />
        <Route path="/edit/:id" component={EditTeam} />
      </div>
      </Router>
    );
  }
}

export default App;
