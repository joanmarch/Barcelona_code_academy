import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ButtonClick from './ButtonClick';


class App extends React.Component{
  
  state ={
    email:'',
    password:''

  }
  getEmail = (emailData) => {
    this.setState({
      email : emailData,
    })
  }
  getPassword = (passwordData) => {
    this.setState ({
      password : passwordData
    })
  }
  render(){
    return(
      <div>
        <EmailInput getEmail = {this.getEmail}/>
        <PasswordInput getPassword = {this.getPassword}/>
        <ButtonClick data = {this.state}/>
       
       
      </div>
    )
  }
}


export default App;

//In a functional component, create a div which contains 2 inputs and one button.
//Each of these should be a separate child component, all rendered by 
//a parent component called App.
//You should collect the data from the inputs and make it available 
//in the parent component (using a function would work for this).
//Input 1 should collect the user's email.
//Input 2 should collect the user's password.
//When the button (also a separate component) is clicked then you 
//should alert the data collected by the two inputs.