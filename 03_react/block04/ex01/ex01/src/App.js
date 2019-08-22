import React from 'react';


class App extends React.Component{
  state = {
    oddNumber : 0
  }

  handleClick = () => {
    this.state.oddNumber += 1;
    if ((this.state.oddNumber % 2)===0){
      this.setState({
        oddNumber : this.state.oddNumber
      })
    }else{

    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.oddNumber}</h1>
      <button onClick = {this.handleClick} >+</button>
      </div>
    )
  }
}

export default App;
