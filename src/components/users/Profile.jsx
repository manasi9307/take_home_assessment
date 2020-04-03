import React from 'react';
import axios from 'axios';
import Follower from '../users/Followers';
//import Repos from '../users/Repos';
class Profile extends React.Component{
    constructor(){
        super()
        this.state={
            repos:[],
            followers:[],
            
        }
    }
componentDidMount(){
axios.get(`https://api.github.com/users/${this.props.match.params.login}/followers`)
.then(res => {
    
    //console.log(res.data)
    this.setState({followers:res.data})
    console.log(this.state.followers)

    return axios.get(`https://api.github.com/users/${this.props.match.params.login}/repos`)
    .then(res => {
        //console.log(res.data)
        this.setState({
            repos:res.data
        })
        console.log(this.state.repos)
    }).catch(err => console.log(err))
    
})
}
    render(){
        const {followers} = this.state
        return(
        <div className="user-grid">
            {followers.map(item =>
               <Follower key={item.id} follower={item} /> )}
        </div>
        )
    }
}

export default Profile;