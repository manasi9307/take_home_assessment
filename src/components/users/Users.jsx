import React from 'react';
import {Consumer} from '../../context';
import Spinner from '../layout/Spinner';
import User from '../users/User';
import './Users.css'
 

class Users extends React.Component{
    render(){
        return(
<Consumer>
    {value => {
    const {users_list,heading} = value
    if(users_list === undefined || users_list.length === 0){
        return <Spinner />
    } else {
        
        return (
            <React.Fragment>
                <h3>{heading}</h3>
            <div className="user-grid">
            {users_list.map(item => (
                
                <User key={item.id} user={item} />
            ))}
            </div>
            </React.Fragment>
        )

    }
    }}
</Consumer>
        )
    }
}

export default Users;