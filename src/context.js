import React from 'react';
import axios from 'axios';

const Context= React.createContext();

export class Provider extends React.Component{
    state={
        users_list:[],
            heading:"Users"
    }

    componentDidMount(){
    axios.get('https://api.github.com/users')
    .then(res => {
        console.log(res.data)
        this.setState({
        users_list:res.data
    })
    
})
    .catch(err => console.log(err))
    }
    render(){
        return(
        <Context.Provider value={this.state}>
         {this.props.children}
        </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;