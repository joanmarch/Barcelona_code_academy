import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';
import UploadScreen from '../UploadScreen';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  }
 }

 async handleClick(event){
     var payload={
    "email":this.state.email,
    "password":this.state.password
    }
   try{
     let response = await Axios.post ('http://localhost:3001/user/login', payload)
     console.log(response);
     if(response.data.code == 200){
      console.log("Login successfull");
      var uploadScreen=[];
      uploadScreen.push(<UploadScreen appContext={this.props.appContext}/>)
      this.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
      }else if(response.data.code == 204){
        console.log("Username password do not match");
        alert("username password do not match");
        }else if (response.data.code == 205){
          alert("Email not existing");
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
   }
   catch(error){
     console.log(error);
   }
    } 

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;