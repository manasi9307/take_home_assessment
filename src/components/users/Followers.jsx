import React from 'react';
import './Followers.css'


const Follower= (props) => {
    const {follower} = props
    return(
    <div>
      <div>
         <div className="card">
             <img src={follower.avatar_url} alt={follower.login}  style={{width: "100px"}}/> 
             <br/>
             <p>{follower.login}</p>
         </div>
    </div>
</div>
    )
}


export default Follower;