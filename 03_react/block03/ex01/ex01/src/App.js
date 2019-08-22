import React from 'react';

class App extends React.Component{
  state={
    userdata:'',
  }
  handleChange = e => {
    this.setState({
      userdata : e.target.value
    })
  }
  render(){
    return(
      <div>
        <input onChange = {this.handleChange} name="userdata" value={this.state.userdata}/>
        {this.state.userdata==='' ?<h1>no data provided!</h1> :<h1>{this.state.userdata}</h1>}
      </div>
    )
  }  
}


export default App;

//Write a class component, with an input that takes the data from the user, the data
// is then displayed (rendered) as an h1 in the page.
//If no text is provided it should display a text saying "no data provided!"