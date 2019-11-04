import React, {Component} from 'react';
import axios from 'axios'



class AddPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            position:'',
            number: 0
         }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            name: this.state.name,
            position: this.state.position,
            number: this.state.number
        }
        axios.post('/players', data )
        .then((results) => {
            console.log(results.data)
        })
        this.setState = ({ 
            name:'',
            position:'',
            number: 0
        })
        this.props.history.push('/players');
        }
    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    
    onPositionChange = (e) => {
        this.setState({
            position: e.target.value
        });
    };

    onNumberChange = (e) => {
        this.setState({
            number: parseInt(e.target.value)
        });
    };
    render() { 

        
        return ( 
            <div>
            <h1><u>Add A Player</u></h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Name: <input
                    type="text" placeholder="Name" value={this.state.name}
                    onChange={(e) => this.onNameChange(e)}
                    /><br/>
                    Position: <input
                    type="text" placeholder="Position" value={this.state.position}
                    onChange={(e) => this.onPositionChange(e)}
                    /><br/>
                    Number: <input
                    type="number" placeholder="Player Number" value={this.state.number}
                    onChange={(e) => this.onNumberChange(e)}
                    /><br/>
                    <button type="submit">Add Player</button>
                </form>
            </div>
        );
    }
}
 
export default AddPlayer;