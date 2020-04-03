import React from 'react';


const Repos = (props) => {
    const repo = {props};
    return(
        <div>
      <div>
         <div className="card">
           {repo.name}
         </div>
    </div>
</div>
    )
}

export default Repos;