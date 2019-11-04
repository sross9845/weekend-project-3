import React, { Component } from 'react';
import axios from 'axios'


class EditTeam extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            team: [],
            name:'',
            sport:''
         }
    }
    componentDidMount(){
        axios.get("/teams/" + this.props.match.params.id).then(response => {
            this.setState({
                team: response.data,
                name: response.data.name,
                sport: response.data.sport
            })
    })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            name: this.state.name,
            sport: this.state.sport
        }
        axios.put("/teams/" + this.props.match.params.id, data )
        .then((results) => {
            console.log(results.data)
        })
        this.props.history.push('/team/' + this.props.match.params.id);
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
                <h1>Edit This Team</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                    type="text" placeholder="Name" value={this.state.name}
                    onChange={(e) => this.onNameChange(e)}
                    />
                    <input
                    type="text" placeholder="Sport" value={this.state.sport}
                    onChange={(e) => this.onSportChange(e)}
                    />
                    <button type="submit">Edit Team!</button>
                </form>
            </div>
         );
    }
}
 
export default EditTeam;