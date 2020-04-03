import React from 'react';
import axios from 'axios';

class Profile extends React.Component{
    constructor(){
        super()
        this.state={
            repos:{},
            followers:{},
            
        }
    }
componentDidMount(){
axios.get(`https://api.github.com/users/${this.props.match.param}/followers`)
.then(res => {
    console.log(res.data)
    this.setState({followers:res.data})

    return axios.get(`https://api.github.com/users/${this.props.match.param}/repos`)
    .then(res => {
        console.log(res.data)
        this.setState({
            repos:res.data
        })
    }).catch(err => console.log(err))
    
})
}
    render(){
        const {followers} = this.state
        return(
        <div>
            <img src={followers.avatar_url} alt="bvkjb"/>
        </div>
        )
    }
}

export default Profile;