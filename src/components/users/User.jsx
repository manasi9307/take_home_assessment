import React from 'react';
import './User.css'
import {Link} from 'react-router-dom';

const User = (props) => {
    const {user} = props;
    
   
return(
    <div>
      <div>
         <div className="card">
             <img src={user.avatar_url} alt={user.login}  style={{width: "100px"}}/> 
             <br/>
             <div className="container">
            <Link to={`/profile/${user.login}`} >{user.login}</Link> 
            
            </div>
         </div>
         </div>
    </div>
)
}

export default User;