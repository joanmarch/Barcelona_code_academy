import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ButtonClick from './ButtonClick';
import Alert from './Alert';


class App extends React.Component{
  
  state ={
    email:'',
    password:'',
    users : [{email:"joan_march@hotmail.com",password:"171089"}, {email:"sara_dreams@gmail.com", password:"280293"}],
    clicked : false

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
  getButtonClicked = () => {
    this.setState({clicked : true})
  }

  checkdataDone = () => {
    this.setState({clicked:false})
  }

  render(){
    
    return(
      <div>
        <EmailInput getEmail = {this.getEmail}/>
        <PasswordInput getPassword = {this.getPassword}/>
        <ButtonClick getButtonClicked = {this.getButtonClicked}/>
        {this.state.clicked? <Alert data= {this.state} checkdataDone = {this.checkdataDone}></Alert> : null}
      </div>
    )
  }
}


export default App;