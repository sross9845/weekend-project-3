import React, {Component} from 'react';
import axios from 'axios'


class AddTeam extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            sport:''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            name: this.state.name,
            sport: this.state.sport
        }
        axios.post('/teams', data )
        .then((results) => {
            console.log(results.data)
        })
        this.setState = ({ 
            name:'',
            sport:''
        })
        this.props.history.push('/teams');
        }
    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    
    onSportChange = (e) => {
        this.setState({
            sport: e.target.value
        });
    };

    render() { 

        
        return ( 
            <div>
                <h1><u>Add A Team</u></h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Name: <input
                    type="text" placeholder="Name" value={this.state.name}
                    onChange={(e) => this.onNameChange(e)}
                    /><br/>
                    Sport: <input
                    type="text" placeholder="Sport" value={this.state.sport}
                    onChange={(e) => this.onSportChange(e)}
                    /><br/>
                    <button type="submit">Add Team!</button>
                </form>
            </div>
        );
    }
}
 
export default AddTeam;