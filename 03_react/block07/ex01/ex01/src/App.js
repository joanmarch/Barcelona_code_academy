import React from 'react';
import MessageGeneric from './MessageGeneric'
import Login from './Login'

class App extends React.Component{
 
  state={
    email:"",
    password:"",
    confirmation:"",
    visible: false,
    messageStyle : {
      message: "",
      color : "",
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let user = this.state;
    this.state.visible = this.checkInputData(user);
    this.setState(this.state);
  }

  waitTime = (time) =>{ setTimeout(() => {
    this.state.visible = false;
    this.setState(this.state);
  }, time);
}

  checkInputData(user){
    if (this.emailAt (user.email)){
      this.state.messageStyle.message = "Please, provide a valid email";
      this.state.messageStyle.color = "red";
      
      //this.state({messageStyle : {message : "Please, provide a valid email"}},
      //              {messageStyle : {color : "red"}}                   
    
      
    }else if (this.lessThan8 (user.password)){
      this.state.messageStyle.message = "Password must have at least 8 characters.";
      this.state.messageStyle.color = "red";
     // this.state({messageStyle : {message : "Password must have at least 8 characters."}},
       //             {messageStyle : {color : "red"}}                   
      
      
    }else if (this.notMatch (user.password, user.confirmation)){
      this.state.messageStyle.message = "Paswword shouls match";
      this.state.messageStyle.color = "red";
     // this.state({messageStyle : {message : "Paswword shouls match"}},
     // {messageStyle : {color : "red"}}                   
      
     
    }else{
      this.state.messageStyle.message = "Successfully registered";
      this.state.messageStyle.color = "green";
     // this.state({messageStyle : {message : "Successfully registered"}},
      //{messageStyle : {color : "green"}}                   
  
    }
    return true
  }

  emailAt(email) {
    let numberAt = 0
    for( let i = 0; i < email.length ; i ++){
      if (email[i] === "@"){
        numberAt += 1;
      }else{

      }
    }
    return (numberAt != 1)
  }

  lessThan8 (password) {
    
    return (password.length<8)
  }

  notMatch (password, confirmation) {
     
    return (password !== confirmation)
  }



  

  render(){
    return(
      <div>
        <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state}></Login>
        {this.state.visible ? <MessageGeneric data= {this.state.messageStyle} waitTime={this.waitTime}></MessageGeneric> : null }
      </div>
    )

  }
}

export default App;
