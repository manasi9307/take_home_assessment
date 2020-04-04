import React from 'react';
import axios from 'axios';
import Follower from '../users/Followers';
import Repos from '../users/Repos';
import Spinner from '../layout/Spinner';
import './Profile.css'

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
        const {followers,repos} = this.state

        if(repos === undefined || repos.length === 0){
            return <Spinner />
        } else {
        return(
           
         <React.Fragment>
            <div className="main-grid">
                <div><h2>Repositories</h2></div>
                <div><h2>Followers</h2></div>
            </div>
              
        <div className="main-grid">
            
            <div className="user-grid">
             {repos.map(item => 
                <Repos key={item.id} repo={item} />
            )}
           </div> 
           <div className="follower">
           {followers.map(item => 
            <Follower key={item.id} follower={item} />
            )}
            </div>
           </div> 
    
        </React.Fragment>
        )
    }
}
}

export default Profile;