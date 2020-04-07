import React from 'react';
import axios from 'axios';

const Context= React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'SEARCH_USER':
         return{
             ...state,
             users_list:action.payload,
             heading:'Search Results'
         };
         default:
             return state;
    }
}

export class Provider extends React.Component{
    state = {
        users_list:[],
        heading:"Users",
        dispatch:action => this.setState(state => reducer(state,action))
    
    }
   
    componentDidMount(){
    axios.get('https://api.github.com/users')
    .then(res => {
        console.log(res.data)
        this.setState({
        users_list:res.data
    })
    
}).catch(err => console.log(err))
}

render(){
    console.log(this.state.users_list)
        return(
        <Context.Provider value={this.state}>
         {this.props.children}
        </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;