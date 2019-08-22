import React from 'react' 
import Child from './Child.js'

class Parent extends React.Component {

  state = {user: 'Rob'} 

handleClick = (user) => {
  this.setState({user})
}

  render() {

    return (
      <div>
      <h1 onClick={()=>this.handleClick('Johanna')}>Click me {this.state.user}</h1>
      <h1 onClick={()=>this.handleClick('David')}>Click me to unmount child component</h1>
      {this.state.user !== 'David' ? <Child user={this.state.user} /> : null}
      </div>
      )
  }
}

export default Parent