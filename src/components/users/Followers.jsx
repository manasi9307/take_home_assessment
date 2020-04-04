import React from 'react';
import './Followers.css'


const Follower= (props) => {
    const {follower} = props
    return(
    <div>
      <div>
         <div>
             <p>{follower.login}</p>
         </div>
    </div>
</div>
    )
}


export default Follower;