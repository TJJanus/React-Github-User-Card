import React from 'react';

function Followers(props){
    console.log('here is the props', props)
    return(
        <div>
            {props.followers.map(followers => (
                <div key={followers.id} className='follower'>
                    <div>
                    <img src={followers.avatar_url} alt={followers.login}/>
                        <h1>{followers.login}</h1>
                        <a href={followers.html_url}>Link to GitHub</a> 
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Followers;