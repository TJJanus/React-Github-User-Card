import React from 'react';
import UserCard from './UserCard';
import Followers from './Followers';



class App extends React.Component {

  state = {
    myCard: {},
    followers: [],
  }
  
  componentDidMount() {
    fetch('https://api.github.com/users/TJJanus')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          // set state here
         myCard: res
        });
        console.log(this.state)
      })
      .catch((err) => {
        console.log('error', err)
      })

      fetch('https://api.github.com/users/TJJanus/followers')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          // set state here
          followers: res
        });
        console.log(this.state)
      })
      .catch((err) => {
        console.log('error', err)
      })

  }


  render() {

  return (
    
    <div className="UserCard">
      <UserCard myCard={this.state.myCard}/>
      <Followers followers={this.state.followers}/>
    </div>

  )
}
}

export default App;
