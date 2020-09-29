import React from 'react';

function UserCard(props) {
    return (
       
        <div className='Card-Style'>
            <img src={props.myCard.avatar_url} alt='blahh'/>
            <h1>{props.myCard.name}</h1>
            <h2>Followers: {props.myCard.followers}</h2>
            <h2>Following: {props.myCard.following}</h2>
            <h3>{props.myCard.location}</h3>
            <a href={props.myCard.html_url}>Link to GitHub</a> 
        </div>


       

    )
  
}


export default UserCard;
