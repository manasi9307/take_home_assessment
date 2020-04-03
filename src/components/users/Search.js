import React from 'react';  
import {Consumer} from '../../context';
import axios from 'axios';

class Search extends React.Component{
    constructor(){
        super()
        this.state={
            user_name:''
        }
    }
   onChange=(e)=>{
     this.setState({user_name:e.target.value})
    }

    findUser=(dispatch,e)=>{
     e.preventDefault();
     axios.get(`https://api.github.com/users/${this.state.user_name}`)
     .then(res => {
         dispatch({
             type:'SEARCH_USER',
             payload:res.data
         })
         this.setState({user_name:''})
     })
    }


    render(){
        return(
          <Consumer>
              {value => {
                  const {dispatch} = value;
              return (
                  <div>
                      <h1>
                          Search
                      </h1>
                      <form onSubmit={this.findUser.bind(this,dispatch)}>
                       <input type="text" placeholder="Search for user" name="name" value={this.state.user_name}
                       onChange={this.onChange}
                       />
                       <button type="submit">Get user Details</button>
                       </form>
                  </div>
              )
              }}
          </Consumer>
        )
    }
}


export default Search;
