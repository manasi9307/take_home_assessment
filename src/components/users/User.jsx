import React from 'react';
import './User.css'

const User = (props) => {
    const {user} = props;
    
   
return(
    <div>
      <div>
         <div className="card">
             <img src={user.avatar_url}  style={{width: "100px"}}/> 
             <br/>
             <div className="container">
            <a href={user.html_url}>{user.login}</a>
            </div>
         </div>
         </div>
    </div>
)
}

export default User;