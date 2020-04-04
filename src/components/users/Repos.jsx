import React from 'react';


const Repos = (props) => {
    const {repo} = props;
    console.log(repo)
    return(
        <div>
      <div>
         <div className="card">
          <a href= {repo.html_url}>{repo.full_name}</a> 
         </div>
    </div>
</div>
    )
}

export default Repos;